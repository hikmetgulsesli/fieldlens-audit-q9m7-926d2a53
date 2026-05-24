import type {
  FieldLensInspectionRecord,
  FieldLensStore,
} from '../fieldlens-audit-q9m7/fieldlens-audit-q9m7.store';

export interface SelectInspectionRecordActionOptions {
  records: FieldLensInspectionRecord[];
  actions: FieldLensStore['actions'];
}

export function createSelectInspectionRecordAction({
  records,
  actions,
}: SelectInspectionRecordActionOptions): (rowIndex: number) => void {
  return (rowIndex) => {
    const record = records[rowIndex];

    if (record) {
      actions.openEditor(record.id);
      return;
    }

    actions.openRecovery('That inspection row is not available in the local workspace.');
  };
}
