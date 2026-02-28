import type { ConsentStore } from '../ports/ConsentStore';

export const rejectConsent = (store: ConsentStore, email: string) => {
  store.reject(email);
};
