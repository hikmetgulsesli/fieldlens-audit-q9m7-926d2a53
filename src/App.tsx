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

export default function App() {
  const { state, actions } = useFieldLensAuditStore(records);

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
    'refresh-5': actions.refresh,
    'new-inspection-6': actions.createInspection,
    'edit-8': () => actions.openEditor(),
    'view-9': () => actions.openEditor(),
    'edit-10': () => actions.openEditor(state.records[1]?.id),
    'view-11': () => actions.openEditor(state.records[1]?.id),
  };

  const editorActions: Partial<Record<InspectionEditorFieldlensAuditQ9m7ActionId, () => void>> = {
    ...navigationActions,
    'new-inspection-1': actions.createInspection,
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
