import type { ConsentStore } from '../ports/ConsentStore';

export const acceptConsent = (store: ConsentStore, email: string, timestamp: string) => {
  store.accept(email, timestamp);
};
