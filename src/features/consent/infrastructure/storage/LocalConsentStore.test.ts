import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LocalConsentStore } from './LocalConsentStore';

interface StorageMock {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

const createStorageMock = (): StorageMock => {
  const values = new Map<string, string>();

  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => {
      values.set(key, value);
    },
    removeItem: (key) => {
      values.delete(key);
    },
    clear: () => {
      values.clear();
    },
  };
};

describe('LocalConsentStore', () => {
  beforeEach(() => {
    vi.stubGlobal('sessionStorage', createStorageMock());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('loads null when there is no stored consent', () => {
    const store = new LocalConsentStore();

    expect(store.load('cea@itcr.ac.cr')).toBeNull();
    expect(store.loadTimestamp('cea@itcr.ac.cr')).toBeNull();
  });

  it('stores accepted consent and timestamp for the current session', () => {
    const store = new LocalConsentStore();

    store.accept('cea@itcr.ac.cr', '2026-02-28T03:40:00.000Z');

    expect(store.load('cea@itcr.ac.cr')).toBe('accepted');
    expect(store.loadTimestamp('cea@itcr.ac.cr')).toBe('2026-02-28T03:40:00.000Z');
  });

  it('clears the stored consent for the current session', () => {
    const store = new LocalConsentStore();

    store.reject('cea@itcr.ac.cr');
    store.clear('cea@itcr.ac.cr');

    expect(store.load('cea@itcr.ac.cr')).toBeNull();
  });
});
