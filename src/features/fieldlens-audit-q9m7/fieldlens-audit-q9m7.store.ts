import { useCallback, useEffect, useMemo, useState } from 'react';

export type FieldLensRoute = 'dashboard' | 'inspections' | 'sites' | 'assets' | 'reports' | 'help';
export type FieldLensPanel = 'operations' | 'editor' | 'recovery';
export type FieldLensStorageStatus = 'ready' | 'offline' | 'error';
export type FieldLensInspectionStatus = 'scheduled' | 'in-progress' | 'completed';
export type FieldLensPriority = 'low' | 'medium' | 'high';
export type FieldLensChecklistResult = 'pass' | 'fail' | 'na';

export interface FieldLensChecklistItem {
  id: string;
  label: string;
  result: FieldLensChecklistResult;
}

export interface FieldLensInspectionRecord {
  id: string;
  site: string;
  asset: string;
  inspector: string;
  status: FieldLensInspectionStatus;
  priority: FieldLensPriority;
  updatedAt: string;
  checklist: FieldLensChecklistItem[];
}

export interface FieldLensCounts {
  inspections: number;
  scheduled: number;
  inProgress: number;
  completed: number;
  failedChecks: number;
}

export interface FieldLensAppSnapshot {
  activeRoute: FieldLensRoute;
  route: FieldLensRoute;
  activeSurface: FieldLensRoute;
  activeScreen: FieldLensPanel;
  selectedRecordId: string | null;
  selectedRecord: FieldLensInspectionRecord | null;
  selectedItem: FieldLensInspectionRecord | null;
  counts: FieldLensCounts;
  itemCounts: FieldLensCounts;
  storageStatus: FieldLensStorageStatus;
  lastError: string | null;
  activePanel: FieldLensPanel;
  offlineMode: boolean;
}

export interface FieldLensPersistedState {
  activeRoute: FieldLensRoute;
  activePanel: FieldLensPanel;
  selectedRecordId: string | null;
  offlineMode: boolean;
}

export interface FieldLensStoreState extends FieldLensPersistedState {
  records: FieldLensInspectionRecord[];
  storageStatus: FieldLensStorageStatus;
  lastError: string | null;
}

export interface FieldLensStore {
  state: FieldLensStoreState;
  snapshot: FieldLensAppSnapshot;
  actions: {
    navigate: (route: FieldLensRoute) => void;
    openOperations: () => void;
    openEditor: (recordId?: string) => void;
    openRecovery: (message?: string) => void;
    selectRecord: (recordId: string | null) => void;
    createInspection: () => void;
    updateChecklistResult: (itemId: string, result: FieldLensChecklistResult) => void;
    saveInspection: () => void;
    cancelEditing: () => void;
    refresh: () => void;
    workOffline: () => void;
    retryConnection: () => void;
    logout: () => void;
  };
}

export const FIELDLENS_STORAGE_KEY = 'fieldlens-audit-q9m7:shell';

const routes = new Set<FieldLensRoute>(['dashboard', 'inspections', 'sites', 'assets', 'reports', 'help']);
const panels = new Set<FieldLensPanel>(['operations', 'editor', 'recovery']);

declare global {
  interface Window {
    app?: FieldLensAppSnapshot;
  }
}

export function createFieldLensInitialState(
  records: FieldLensInspectionRecord[],
  persisted?: Partial<FieldLensPersistedState>,
): FieldLensStoreState {
  const selectedRecordId = records.some((record) => record.id === persisted?.selectedRecordId)
    ? persisted?.selectedRecordId ?? records[0]?.id ?? null
    : records[0]?.id ?? null;

  return {
    records,
    activeRoute: normalizeRoute(persisted?.activeRoute) ?? 'inspections',
    activePanel: normalizePanel(persisted?.activePanel) ?? 'operations',
    selectedRecordId,
    offlineMode: Boolean(persisted?.offlineMode),
    storageStatus: persisted?.offlineMode ? 'offline' : 'ready',
    lastError: null,
  };
}

export function getFieldLensCounts(records: FieldLensInspectionRecord[]): FieldLensCounts {
  return {
    inspections: records.length,
    scheduled: records.filter((record) => record.status === 'scheduled').length,
    inProgress: records.filter((record) => record.status === 'in-progress').length,
    completed: records.filter((record) => record.status === 'completed').length,
    failedChecks: records.reduce(
      (total, record) => total + record.checklist.filter((item) => item.result === 'fail').length,
      0,
    ),
  };
}

export function getFieldLensSnapshot(state: FieldLensStoreState): FieldLensAppSnapshot {
  const selectedRecord = state.records.find((record) => record.id === state.selectedRecordId) ?? null;

  return {
    activeRoute: state.activeRoute,
    route: state.activeRoute,
    activeSurface: state.activeRoute,
    activeScreen: state.activePanel,
    selectedRecordId: state.selectedRecordId,
    selectedRecord,
    selectedItem: selectedRecord,
    counts: getFieldLensCounts(state.records),
    itemCounts: getFieldLensCounts(state.records),
    storageStatus: state.storageStatus,
    lastError: state.lastError,
    activePanel: state.activePanel,
    offlineMode: state.offlineMode,
  };
}

export function readFieldLensPersistedState(storage: Storage | undefined): {
  state?: FieldLensPersistedState;
  error?: string;
} {
  if (!storage) {
    return {};
  }

  const raw = storage.getItem(FIELDLENS_STORAGE_KEY);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as Partial<FieldLensPersistedState>;
    return {
      state: {
        activeRoute: normalizeRoute(parsed.activeRoute) ?? 'inspections',
        activePanel: normalizePanel(parsed.activePanel) ?? 'operations',
        selectedRecordId: typeof parsed.selectedRecordId === 'string' ? parsed.selectedRecordId : null,
        offlineMode: Boolean(parsed.offlineMode),
      },
    };
  } catch {
    return { error: 'Saved FieldLens workspace data could not be read.' };
  }
}

export function writeFieldLensPersistedState(storage: Storage | undefined, state: FieldLensStoreState) {
  if (!storage) {
    return;
  }

  const persisted: FieldLensPersistedState = {
    activeRoute: state.activeRoute,
    activePanel: state.activePanel,
    selectedRecordId: state.selectedRecordId,
    offlineMode: state.offlineMode,
  };

  storage.setItem(FIELDLENS_STORAGE_KEY, JSON.stringify(persisted));
}

export function useFieldLensAuditStore(
  records: FieldLensInspectionRecord[],
  storage: Storage | undefined = typeof window === 'undefined' ? undefined : window.localStorage,
): FieldLensStore {
  const persisted = useMemo(() => readFieldLensPersistedState(storage), [storage]);
  const [state, setState] = useState<FieldLensStoreState>(() => {
    const initialState = createFieldLensInitialState(records, persisted.state);
    if (!persisted.error) {
      return initialState;
    }

    return {
      ...initialState,
      activePanel: 'recovery',
      storageStatus: 'error',
      lastError: persisted.error,
    };
  });

  const snapshot = useMemo(() => getFieldLensSnapshot(state), [state]);

  useEffect(() => {
    window.app = snapshot;
  }, [snapshot]);

  useEffect(() => {
    if (state.storageStatus === 'error') {
      return;
    }

    try {
      writeFieldLensPersistedState(storage, state);
    } catch {
      setState((current) => ({
        ...current,
        activePanel: 'recovery',
        storageStatus: 'error',
        lastError: 'FieldLens could not save workspace preferences.',
      }));
    }
  }, [state, storage]);

  const navigate = useCallback((route: FieldLensRoute) => {
    setState((current) => ({
      ...current,
      activeRoute: route,
      activePanel: route === 'inspections' ? 'operations' : current.activePanel,
      lastError: null,
    }));
  }, []);

  const openOperations = useCallback(() => {
    setState((current) => ({ ...current, activeRoute: 'inspections', activePanel: 'operations', lastError: null }));
  }, []);

  const openEditor = useCallback((recordId?: string) => {
    setState((current) => ({
      ...current,
      activeRoute: 'inspections',
      activePanel: 'editor',
      selectedRecordId: recordId ?? current.selectedRecordId ?? current.records[0]?.id ?? null,
      lastError: null,
    }));
  }, []);

  const openRecovery = useCallback((message = 'FieldLens is showing a recoverable workspace state.') => {
    setState((current) => ({ ...current, activePanel: 'recovery', storageStatus: 'error', lastError: message }));
  }, []);

  const selectRecord = useCallback((recordId: string | null) => {
    setState((current) => ({
      ...current,
      selectedRecordId: recordId && current.records.some((record) => record.id === recordId) ? recordId : null,
    }));
  }, []);

  const createInspection = useCallback(() => {
    setState((current) => {
      const id = `inspection-${Date.now()}`;
      const nextRecord: FieldLensInspectionRecord = {
        id,
        site: 'Unassigned Site',
        asset: 'New Asset',
        inspector: 'Field Team',
        status: 'in-progress',
        priority: 'medium',
        updatedAt: new Date().toISOString(),
        checklist: [
          { id: 'ppe', label: 'PPE and lockout verified', result: 'na' },
          { id: 'housing', label: 'Housing and access panels intact', result: 'na' },
          { id: 'pressure', label: 'Pressure readings within range', result: 'na' },
          { id: 'photos', label: 'Photo evidence attached', result: 'na' },
        ],
      };

      return {
        ...current,
        records: [nextRecord, ...current.records],
        selectedRecordId: id,
        activeRoute: 'inspections',
        activePanel: 'editor',
        lastError: null,
      };
    });
  }, []);

  const updateChecklistResult = useCallback((itemId: string, result: FieldLensChecklistResult) => {
    setState((current) => ({
      ...current,
      records: current.records.map((record) =>
        record.id === current.selectedRecordId
          ? {
              ...record,
              updatedAt: new Date().toISOString(),
              checklist: record.checklist.map((item) => (item.id === itemId ? { ...item, result } : item)),
            }
          : record,
      ),
    }));
  }, []);

  const saveInspection = useCallback(() => {
    setState((current) => ({
      ...current,
      activePanel: 'operations',
      records: current.records.map((record) =>
        record.id === current.selectedRecordId ? { ...record, status: 'completed', updatedAt: new Date().toISOString() } : record,
      ),
      lastError: null,
    }));
  }, []);

  const cancelEditing = useCallback(() => {
    setState((current) => ({ ...current, activePanel: 'operations', lastError: null }));
  }, []);

  const refresh = useCallback(() => {
    setState((current) => ({ ...current, storageStatus: current.offlineMode ? 'offline' : 'ready', lastError: null }));
  }, []);

  const workOffline = useCallback(() => {
    setState((current) => ({ ...current, offlineMode: true, storageStatus: 'offline', activePanel: 'operations', lastError: null }));
  }, []);

  const retryConnection = useCallback(() => {
    setState((current) => ({ ...current, offlineMode: false, storageStatus: 'ready', activePanel: 'operations', lastError: null }));
  }, []);

  const logout = useCallback(() => {
    setState((current) => ({ ...current, selectedRecordId: null, activePanel: 'operations' }));
  }, []);

  return {
    state,
    snapshot,
    actions: {
      navigate,
      openOperations,
      openEditor,
      openRecovery,
      selectRecord,
      createInspection,
      updateChecklistResult,
      saveInspection,
      cancelEditing,
      refresh,
      workOffline,
      retryConnection,
      logout,
    },
  };
}

function normalizeRoute(value: unknown): FieldLensRoute | undefined {
  return typeof value === 'string' && routes.has(value as FieldLensRoute) ? (value as FieldLensRoute) : undefined;
}

function normalizePanel(value: unknown): FieldLensPanel | undefined {
  return typeof value === 'string' && panels.has(value as FieldLensPanel) ? (value as FieldLensPanel) : undefined;
}
