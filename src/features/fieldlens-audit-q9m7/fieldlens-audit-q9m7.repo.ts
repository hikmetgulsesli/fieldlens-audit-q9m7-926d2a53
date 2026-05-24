import { fieldLensAuditQ9m7Fixture } from '../../__fixtures__/fieldlens-audit-q9m7.fixture';
import type { FieldLensInspectionRecord } from './fieldlens-audit-q9m7.store';

export interface FieldLensAuditRepository {
  listInspections: () => FieldLensInspectionRecord[];
}

export function createFieldLensAuditRepository(
  records: FieldLensInspectionRecord[] = fieldLensAuditQ9m7Fixture,
): FieldLensAuditRepository {
  return {
    listInspections: () => records.map(cloneInspection),
  };
}

function cloneInspection(record: FieldLensInspectionRecord): FieldLensInspectionRecord {
  return {
    ...record,
    checklist: record.checklist.map((item) => ({ ...item })),
  };
}
