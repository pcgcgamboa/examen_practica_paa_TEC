import { examSessionActions } from '../reducers/examSession.actions';
import type { ExamSessionState } from '../../domain/types/exam.types';

export const restartExam = (state: ExamSessionState) => {
  return examSessionActions.restartSession(state);
};
