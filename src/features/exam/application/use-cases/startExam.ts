import { examSessionActions } from '../reducers/examSession.actions';

export const startExam = (startedAt: number) => {
  return examSessionActions.startExam(startedAt);
};
