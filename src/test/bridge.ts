import type { FieldLensAppSnapshot } from '../features/fieldlens-audit-q9m7/fieldlens-audit-q9m7.store';

export function getFieldLensAppSnapshot(): FieldLensAppSnapshot | undefined {
  return window.app;
}
