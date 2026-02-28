import type { ConsentDecision } from '../../features/consent/domain/consent.types';
import type { ExamSessionState } from '../../features/exam/domain/types/exam.types';

export type AppScreen =
  | 'login'
  | 'consent'
  | 'consentRejected'
  | 'welcome'
  | 'instructions'
  | 'exam'
  | 'review'
  | 'results';

export interface ResolveAppScreenParams {
  isAuthenticated: boolean;
  consentDecision: ConsentDecision | null;
  examState: ExamSessionState;
}
