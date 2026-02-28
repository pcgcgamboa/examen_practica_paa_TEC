import { examSessionActions } from '../reducers/examSession.actions';

export const finishExam = (timestamp: number) => {
  return examSessionActions.finishExam(timestamp);
};
