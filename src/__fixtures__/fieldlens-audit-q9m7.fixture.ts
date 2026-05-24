import type { FieldLensInspectionRecord } from '../features/fieldlens-audit-q9m7/fieldlens-audit-q9m7.store';

export const fieldLensAuditQ9m7Fixture: FieldLensInspectionRecord[] = [
  {
    id: 'inspection-downtown-pump-042',
    site: 'Downtown Waterworks',
    asset: 'Pump Station 4',
    inspector: 'Maya Chen',
    status: 'in-progress',
    priority: 'high',
    updatedAt: '2026-05-24T08:45:00.000Z',
    checklist: [
      { id: 'ppe', label: 'PPE and lockout verified', result: 'pass' },
      { id: 'housing', label: 'Housing and access panels intact', result: 'fail' },
      { id: 'pressure', label: 'Pressure readings within range', result: 'na' },
      { id: 'photos', label: 'Photo evidence attached', result: 'pass' },
    ],
  },
  {
    id: 'inspection-harbor-crane-117',
    site: 'Harbor Logistics Yard',
    asset: 'Crane 12',
    inspector: 'Noah Patel',
    status: 'scheduled',
    priority: 'medium',
    updatedAt: '2026-05-23T16:20:00.000Z',
    checklist: [
      { id: 'ppe', label: 'PPE and lockout verified', result: 'na' },
      { id: 'housing', label: 'Housing and access panels intact', result: 'na' },
      { id: 'pressure', label: 'Pressure readings within range', result: 'na' },
      { id: 'photos', label: 'Photo evidence attached', result: 'na' },
    ],
  },
];
