import type { ConsentStore } from '../ports/ConsentStore';

export const clearConsent = (store: ConsentStore, email: string) => {
  store.clear(email);
};
