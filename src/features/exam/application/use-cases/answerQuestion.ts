import { examSessionActions } from '../reducers/examSession.actions';

export const answerQuestion = (answerIndex: number) => {
  return examSessionActions.selectAnswer(answerIndex);
};
