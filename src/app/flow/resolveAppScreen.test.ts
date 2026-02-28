import { describe, expect, it } from 'vitest';
import { resolveAppScreen } from './resolveAppScreen';
import type { ExamSessionState } from '../../features/exam/domain/types/exam.types';

const baseExamState: ExamSessionState = {
  questions: [],
  currentQuestion: 0,
  userAnswers: [],
  checkedQuestions: [],
  questionTimes: [],
  currentQuestionStartTime: null,
  questionInteractions: [],
  examStartTime: null,
  isExamStarted: false,
  isExamFinished: false,
  isReviewMode: false,
  reviewQuestion: null,
  showWelcome: true,
  sessionVersion: 1,
};

describe('resolveAppScreen', () => {
  it('returns login when the user is not authenticated', () => {
    expect(
      resolveAppScreen({
        isAuthenticated: false,
        consentDecision: null,
        examState: baseExamState,
      }),
    ).toBe('login');
  });

  it('returns consent when the user is authenticated and has no decision', () => {
    expect(
      resolveAppScreen({
        isAuthenticated: true,
        consentDecision: null,
        examState: baseExamState,
      }),
    ).toBe('consent');
  });

  it('returns review when the exam finished and review mode is active', () => {
    expect(
      resolveAppScreen({
        isAuthenticated: true,
        consentDecision: 'accepted',
        examState: {
          ...baseExamState,
          showWelcome: false,
          isExamFinished: true,
          isReviewMode: true,
          reviewQuestion: 0,
        },
      }),
    ).toBe('review');
  });
});
