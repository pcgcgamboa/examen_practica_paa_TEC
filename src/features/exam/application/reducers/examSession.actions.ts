import type { ExamSessionAction, ExamSessionState } from '../../domain/types/exam.types';

export const examSessionActions = {
  createSession: (state: ExamSessionState): ExamSessionAction => ({ type: 'SESSION_CREATED', payload: { state } }),
  continueFromWelcome: (): ExamSessionAction => ({ type: 'WELCOME_CONTINUED' }),
  startExam: (startedAt: number): ExamSessionAction => ({ type: 'EXAM_STARTED', payload: { startedAt } }),
  selectAnswer: (answerIndex: number): ExamSessionAction => ({ type: 'ANSWER_SELECTED', payload: { answerIndex } }),
  checkQuestion: (): ExamSessionAction => ({ type: 'QUESTION_CHECKED' }),
  navigateQuestion: (questionIndex: number, timestamp: number): ExamSessionAction => ({
    type: 'QUESTION_NAVIGATED',
    payload: { questionIndex, timestamp },
  }),
  viewHint: (questionIndex: number, timestamp: number): ExamSessionAction => ({
    type: 'HINT_VIEWED',
    payload: { questionIndex, timestamp },
  }),
  viewFormulas: (questionIndex: number, timestamp: number): ExamSessionAction => ({
    type: 'FORMULAS_VIEWED',
    payload: { questionIndex, timestamp },
  }),
  finishExam: (timestamp: number): ExamSessionAction => ({ type: 'EXAM_FINISHED', payload: { timestamp } }),
  expireExam: (timestamp: number): ExamSessionAction => ({ type: 'TIME_EXPIRED', payload: { timestamp } }),
  enterReview: (questionIndex: number): ExamSessionAction => ({ type: 'REVIEW_ENTERED', payload: { questionIndex } }),
  exitReview: (): ExamSessionAction => ({ type: 'REVIEW_EXITED' }),
  restartSession: (state: ExamSessionState): ExamSessionAction => ({ type: 'SESSION_RESTARTED', payload: { state } }),
};
