import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';
import { FIELDLENS_STORAGE_KEY } from './features/fieldlens-audit-q9m7/fieldlens-audit-q9m7.store';
import { getFieldLensAppSnapshot } from './test/bridge';

afterEach(() => {
  window.localStorage.clear();
});

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Local workspace ready.');
    expect(getFieldLensAppSnapshot()).toMatchObject({
      activeRoute: 'inspections',
      activePanel: 'operations',
      storageStatus: 'ready',
    });
  });

  it('shows corrupted localStorage recovery feedback', () => {
    window.localStorage.setItem(FIELDLENS_STORAGE_KEY, '{broken');

    render(<App />);

    expect(screen.getByRole('alert')).toHaveTextContent('Saved FieldLens workspace data could not be read.');
    expect(getFieldLensAppSnapshot()).toMatchObject({
      activePanel: 'recovery',
      storageStatus: 'error',
      lastError: 'Saved FieldLens workspace data could not be read.',
    });
  });

  it('clears local workspace data with visible feedback', async () => {
    window.localStorage.setItem(
      FIELDLENS_STORAGE_KEY,
      JSON.stringify({ activeRoute: 'reports', activePanel: 'operations', selectedRecordId: null, offlineMode: true }),
    );
    const user = userEvent.setup();

    render(<App />);
    await user.click(screen.getByRole('button', { name: /clear local data/i }));

    expect(screen.getByRole('status')).toHaveTextContent('Local workspace data cleared.');
    expect(getFieldLensAppSnapshot()).toMatchObject({
      activeRoute: 'inspections',
      activePanel: 'operations',
      storageStatus: 'ready',
      offlineMode: false,
    });
  });
});
