import type { FieldLensStore } from '../fieldlens-audit-q9m7/fieldlens-audit-q9m7.store';

export function createRetryInspectionLoadAction(actions: FieldLensStore['actions']): () => void {
  return () => {
    actions.refresh();
  };
}
