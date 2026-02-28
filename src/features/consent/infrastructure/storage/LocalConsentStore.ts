import type { ConsentDecision } from '../../domain/consent.types';
import type { ConsentStore } from '../../application/ports/ConsentStore';

export class LocalConsentStore implements ConsentStore {
  load(email: string): ConsentDecision | null {
    const value = localStorage.getItem(`consent_${email}`);

    if (value === 'true') {
      return 'accepted';
    }

    if (value === 'false') {
      return 'rejected';
    }

    return null;
  }

  loadTimestamp(email: string): string | null {
    return localStorage.getItem(`consent_timestamp_${email}`);
  }

  accept(email: string, timestamp: string): void {
    localStorage.setItem(`consent_${email}`, 'true');
    localStorage.setItem(`consent_timestamp_${email}`, timestamp);
  }

  reject(email: string): void {
    localStorage.setItem(`consent_${email}`, 'false');
  }

  clear(email: string): void {
    localStorage.removeItem(`consent_${email}`);
    localStorage.removeItem(`consent_timestamp_${email}`);
  }
}
