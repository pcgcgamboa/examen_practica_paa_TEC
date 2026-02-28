import type { ConsentStore } from '../ports/ConsentStore';

export const loadConsentDecision = (store: ConsentStore, email: string) => {
  return store.load(email);
};
