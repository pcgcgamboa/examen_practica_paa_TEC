import { useReducer } from 'react';
import type { ExamConfiguration } from '../../domain/types/exam.types';
import { getScoreByArea, getTotalCorrectAnswers } from '../../domain/services/ExamScoringService';
import type { QuestionBank } from '../ports/QuestionBank';
import { answerQuestion } from '../use-cases/answerQuestion';
import { checkQuestion } from '../use-cases/checkQuestion';
import { createExamSession } from '../use-cases/createExamSession';
import { navigateQuestion } from '../use-cases/navigateQuestion';
import { restartExam } from '../use-cases/restartExam';
import { startExam } from '../use-cases/startExam';
import { examSessionActions } from '../reducers/examSession.actions';
import { examSessionReducer } from '../reducers/examSessionReducer';

interface UseExamSessionParams {
  questionBank: QuestionBank;
  examConfig: ExamConfiguration;
}

export const useExamSession = ({ questionBank, examConfig }: UseExamSessionParams) => {
  const [state, dispatch] = useReducer(
    examSessionReducer,
    undefined,
    () => createExamSession(questionBank, examConfig, 1, true),
  );

  const currentQuestion = state.questions[state.currentQuestion];
  const hasPendingFinishConfirmation =
    !state.userAnswers.every((answer) => answer !== null) || !state.checkedQuestions.every((checked) => checked);

  const buildNextSession = (showWelcome: boolean) =>
    createExamSession(questionBank, examConfig, state.sessionVersion + 1, showWelcome);

  const continueFromWelcome = () => {
    dispatch(examSessionActions.continueFromWelcome());
  };

  const initializeAuthenticatedSession = () => {
    dispatch(examSessionActions.createSession(buildNextSession(true)));
  };

  const resetForLogout = () => {
    dispatch(examSessionActions.createSession(buildNextSession(true)));
  };

  const handleStartExam = () => {
    dispatch(startExam(Date.now()));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    dispatch(answerQuestion(answerIndex));
  };

  const handleCheckAnswer = () => {
    dispatch(checkQuestion());
  };

  const goToQuestion = (questionIndex: number) => {
    dispatch(navigateQuestion(questionIndex, Date.now()));
  };

  const goToNextQuestion = () => {
    if (state.currentQuestion < state.questions.length - 1) {
      dispatch(navigateQuestion(state.currentQuestion + 1, Date.now()));
    }
  };

  const goToPreviousQuestion = () => {
    if (state.currentQuestion > 0) {
      dispatch(navigateQuestion(state.currentQuestion - 1, Date.now()));
    }
  };

  const markHintViewed = (questionIndex: number) => {
    dispatch(examSessionActions.viewHint(questionIndex, Date.now()));
  };

  const markFormulasViewed = (questionIndex: number) => {
    dispatch(examSessionActions.viewFormulas(questionIndex, Date.now()));
  };

  const enterReview = (questionIndex: number) => {
    dispatch(examSessionActions.enterReview(questionIndex));
  };

  const exitReview = () => {
    dispatch(examSessionActions.exitReview());
  };

  const goToNextReviewQuestion = () => {
    if (state.reviewQuestion !== null && state.reviewQuestion < state.questions.length - 1) {
      dispatch(examSessionActions.enterReview(state.reviewQuestion + 1));
    }
  };

  const goToPreviousReviewQuestion = () => {
    if (state.reviewQuestion !== null && state.reviewQuestion > 0) {
      dispatch(examSessionActions.enterReview(state.reviewQuestion - 1));
    }
  };

  const restartCurrentSession = () => {
    dispatch(restartExam(buildNextSession(false)));
  };

  return {
    state,
    dispatch,
    currentQuestion,
    totalScore: getTotalCorrectAnswers(state.questions, state.userAnswers),
    scoreByArea: getScoreByArea(state.questions, state.userAnswers),
    hasPendingFinishConfirmation,
    continueFromWelcome,
    initializeAuthenticatedSession,
    resetForLogout,
    handleStartExam,
    handleAnswerSelect,
    handleCheckAnswer,
    goToQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    markHintViewed,
    markFormulasViewed,
    enterReview,
    exitReview,
    goToNextReviewQuestion,
    goToPreviousReviewQuestion,
    restartCurrentSession,
  };
};
