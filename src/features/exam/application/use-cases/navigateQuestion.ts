import { examSessionActions } from '../reducers/examSession.actions';

export const navigateQuestion = (questionIndex: number, timestamp: number) => {
  return examSessionActions.navigateQuestion(questionIndex, timestamp);
};
