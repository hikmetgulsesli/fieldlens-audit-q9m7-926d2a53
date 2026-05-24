import type { FieldLensInspectionRecord } from '../fieldlens-audit-q9m7/fieldlens-audit-q9m7.store';

export interface SearchInspectionRecordsResult {
  query: string;
  records: FieldLensInspectionRecord[];
  total: number;
}

export function searchInspectionRecords(
  records: FieldLensInspectionRecord[],
  query: string,
): SearchInspectionRecordsResult {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return {
      query: normalizedQuery,
      records,
      total: records.length,
    };
  }

  const matchingRecords = records.filter((record) =>
    [record.id, record.site, record.asset, record.inspector, record.status, record.priority]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery),
  );

  return {
    query: normalizedQuery,
    records: matchingRecords,
    total: matchingRecords.length,
  };
}
