import type { FieldLensStore } from '../fieldlens-audit-q9m7/fieldlens-audit-q9m7.store';

export function createSaveInspectionRecordAction(actions: FieldLensStore['actions']): () => void {
  return () => {
    actions.saveInspection();
  };
}
