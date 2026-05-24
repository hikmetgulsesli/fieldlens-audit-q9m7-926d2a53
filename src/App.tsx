import {
  EmptyAndErrorRecoveryFieldlensAuditQ9m7,
  InspectionEditorFieldlensAuditQ9m7,
  InspectionOperationsFieldlensAuditQ9m7,
  type EmptyAndErrorRecoveryFieldlensAuditQ9m7ActionId,
  type InspectionEditorFieldlensAuditQ9m7ActionId,
  type InspectionOperationsFieldlensAuditQ9m7ActionId,
} from './screens';
import { createFieldLensAuditRepository } from './features/fieldlens-audit-q9m7/fieldlens-audit-q9m7.repo';
import { useFieldLensAuditStore, type FieldLensRoute } from './features/fieldlens-audit-q9m7/fieldlens-audit-q9m7.store';

const repository = createFieldLensAuditRepository();
const records = repository.listInspections();

const disabledAction = () => {};

export default function App() {
  const { state, snapshot, actions } = useFieldLensAuditStore(records);

  const navigationActions = {
    'dashboard-1': () => actions.navigate('dashboard'),
    'inspections-2': () => actions.navigate('inspections'),
    'sites-3': () => actions.navigate('sites'),
    'assets-4': () => actions.navigate('assets'),
    'reports-5': () => actions.navigate('reports'),
    'help-6': () => actions.navigate('help'),
    'logout-7': actions.logout,
  } satisfies Partial<Record<`${FieldLensRoute}-1` | 'inspections-2' | 'sites-3' | 'assets-4' | 'reports-5' | 'help-6' | 'logout-7', () => void>>;

  const operationsActions: Partial<Record<InspectionOperationsFieldlensAuditQ9m7ActionId, () => void>> = {
    ...navigationActions,
    'button-1-1': disabledAction,
    'button-2-2': disabledAction,
    'button-3-3': disabledAction,
    'button-4-4': disabledAction,
    'refresh-5': actions.refresh,
    'new-inspection-6': actions.createInspection,
    'button-7-7': disabledAction,
    'button-8-8': disabledAction,
    'button-9-9': disabledAction,
    'button-10-10': disabledAction,
    'edit-8': () => actions.openEditor(),
    'view-9': () => actions.openEditor(),
    'edit-10': () => actions.openEditor(state.records[1]?.id),
    'view-11': () => actions.openEditor(state.records[1]?.id),
  };

  const editorActions: Partial<Record<InspectionEditorFieldlensAuditQ9m7ActionId, () => void>> = {
    ...navigationActions,
    'new-inspection-1': actions.createInspection,
    'button-2-2': disabledAction,
    'button-3-3': disabledAction,
    'button-4-4': disabledAction,
    'button-5-5': disabledAction,
    'cancel-6': actions.cancelEditing,
    'save-inspection-7': actions.saveInspection,
    'pass-8': () => actions.updateChecklistResult('ppe', 'pass'),
    'fail-9': () => actions.updateChecklistResult('ppe', 'fail'),
    'n-a-10': () => actions.updateChecklistResult('ppe', 'na'),
    'pass-11': () => actions.updateChecklistResult('housing', 'pass'),
    'fail-12': () => actions.updateChecklistResult('housing', 'fail'),
    'n-a-13': () => actions.updateChecklistResult('housing', 'na'),
    'pass-14': () => actions.updateChecklistResult('pressure', 'pass'),
    'fail-15': () => actions.updateChecklistResult('pressure', 'fail'),
    'n-a-16': () => actions.updateChecklistResult('pressure', 'na'),
    'pass-17': () => actions.updateChecklistResult('photos', 'pass'),
    'fail-18': () => actions.updateChecklistResult('photos', 'fail'),
    'n-a-19': () => actions.updateChecklistResult('photos', 'na'),
  };

  const recoveryActions: Partial<Record<EmptyAndErrorRecoveryFieldlensAuditQ9m7ActionId, () => void>> = {
    ...navigationActions,
    'new-inspection-1': actions.createInspection,
    'button-2-2': disabledAction,
    'button-3-3': disabledAction,
    'button-4-4': disabledAction,
    'button-5-5': disabledAction,
    'work-offline-6': actions.workOffline,
    'retry-connection-7': actions.retryConnection,
  };

  return (
    <div
      data-setfarm-root="fieldlens-audit-q9m7"
      data-active-route={state.activeRoute}
      data-active-panel={state.activePanel}
      className="min-h-screen bg-slate-50 text-slate-950"
    >
      <section
        aria-label="FieldLens workspace status"
        className="border-b border-slate-200 bg-white px-4 py-3 text-sm shadow-sm"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <strong className="text-slate-950">FieldLens Audit Q9M7</strong>
            <span>Route: {snapshot.activeRoute}</span>
            <span>Panel: {snapshot.activePanel}</span>
            <span>Inspections: {snapshot.counts.inspections}</span>
            <span>Storage: {snapshot.storageStatus}</span>
          </div>
          <button
            type="button"
            onClick={actions.clearWorkspaceData}
            className="rounded border border-slate-300 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100"
          >
            Clear local data
          </button>
          <p className="basis-full text-slate-600" role={snapshot.lastError ? 'alert' : 'status'}>
            {snapshot.lastError ?? snapshot.statusMessage}
          </p>
        </div>
      </section>
      {state.activePanel === 'editor' ? (
        <InspectionEditorFieldlensAuditQ9m7 actions={editorActions} />
      ) : state.activePanel === 'recovery' ? (
        <EmptyAndErrorRecoveryFieldlensAuditQ9m7 actions={recoveryActions} />
      ) : (
        <InspectionOperationsFieldlensAuditQ9m7 actions={operationsActions} />
      )}
    </div>
  );
}
