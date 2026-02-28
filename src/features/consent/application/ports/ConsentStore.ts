import type { ConsentDecision } from '../../domain/consent.types';

export interface ConsentStore {
  load(email: string): ConsentDecision | null;
  loadTimestamp(email: string): string | null;
  accept(email: string, timestamp: string): void;
  reject(email: string): void;
  clear(email: string): void;
}
