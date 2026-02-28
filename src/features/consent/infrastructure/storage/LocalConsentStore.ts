import type { ConsentDecision } from '../../domain/consent.types';
import type { ConsentStore } from '../../application/ports/ConsentStore';

export class LocalConsentStore implements ConsentStore {
  private getDecisionKey(email: string) {
    return `consent_${email}`;
  }

  private getTimestampKey(email: string) {
    return `consent_timestamp_${email}`;
  }

  load(email: string): ConsentDecision | null {
    const value = sessionStorage.getItem(this.getDecisionKey(email));

    if (value === 'true') {
      return 'accepted';
    }

    if (value === 'false') {
      return 'rejected';
    }

    return null;
  }

  loadTimestamp(email: string): string | null {
    return sessionStorage.getItem(this.getTimestampKey(email));
  }

  accept(email: string, timestamp: string): void {
    sessionStorage.setItem(this.getDecisionKey(email), 'true');
    sessionStorage.setItem(this.getTimestampKey(email), timestamp);
  }

  reject(email: string): void {
    sessionStorage.setItem(this.getDecisionKey(email), 'false');
  }

  clear(email: string): void {
    sessionStorage.removeItem(this.getDecisionKey(email));
    sessionStorage.removeItem(this.getTimestampKey(email));
  }
}
