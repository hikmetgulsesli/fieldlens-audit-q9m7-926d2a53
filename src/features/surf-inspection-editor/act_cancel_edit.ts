import type { FieldLensStore } from '../fieldlens-audit-q9m7/fieldlens-audit-q9m7.store';

export function createCancelInspectionEditAction(actions: FieldLensStore['actions']): () => void {
  return () => {
    actions.cancelEditing();
  };
}
