import type { AppScreen, ResolveAppScreenParams } from './app-screen.types';

export const resolveAppScreen = ({ isAuthenticated, consentDecision, examState }: ResolveAppScreenParams): AppScreen => {
  if (!isAuthenticated) {
    return 'login';
  }

  if (consentDecision === null) {
    return 'consent';
  }

  if (consentDecision === 'rejected') {
    return 'consentRejected';
  }

  if (examState.showWelcome) {
    return 'welcome';
  }

  if (!examState.isExamStarted && !examState.isExamFinished) {
    return 'instructions';
  }

  if (examState.isExamFinished && examState.isReviewMode && examState.reviewQuestion !== null) {
    return 'review';
  }

  if (examState.isExamFinished) {
    return 'results';
  }

  return 'exam';
};
