import type { ExamSessionAction, ExamSessionState } from '../../domain/types/exam.types';
import {
  markFormulasViewed,
  markHintViewed,
  markQuestionChecked,
  markQuestionVisited,
  recordCurrentQuestionTime,
} from '../../domain/services/ExamTrackingService';

export const examSessionReducer = (state: ExamSessionState, action: ExamSessionAction): ExamSessionState => {
  switch (action.type) {
    case 'SESSION_CREATED':
    case 'SESSION_RESTARTED':
      return action.payload.state;
    case 'WELCOME_CONTINUED':
      return {
        ...state,
        showWelcome: false,
      };
    case 'EXAM_STARTED': {
      const startedState = {
        ...state,
        isExamStarted: true,
        isExamFinished: false,
        examStartTime: action.payload.startedAt,
        currentQuestionStartTime: action.payload.startedAt,
      };

      return markQuestionVisited(startedState, startedState.currentQuestion, action.payload.startedAt);
    }
    case 'ANSWER_SELECTED': {
      if (state.checkedQuestions[state.currentQuestion]) {
        return state;
      }

      const userAnswers = [...state.userAnswers];
      userAnswers[state.currentQuestion] = action.payload.answerIndex;

      return {
        ...state,
        userAnswers,
      };
    }
    case 'QUESTION_CHECKED':
      return markQuestionChecked(state);
    case 'QUESTION_NAVIGATED': {
      const timedState = recordCurrentQuestionTime(state, action.payload.timestamp);
      const navigatedState = {
        ...timedState,
        currentQuestion: action.payload.questionIndex,
        currentQuestionStartTime: action.payload.timestamp,
      };

      return markQuestionVisited(navigatedState, action.payload.questionIndex, action.payload.timestamp);
    }
    case 'HINT_VIEWED':
      return markHintViewed(state, action.payload.questionIndex, action.payload.timestamp);
    case 'FORMULAS_VIEWED':
      return markFormulasViewed(state, action.payload.questionIndex, action.payload.timestamp);
    case 'EXAM_FINISHED':
    case 'TIME_EXPIRED': {
      const timedState = recordCurrentQuestionTime(state, action.payload.timestamp);

      return {
        ...timedState,
        isExamStarted: false,
        isExamFinished: true,
      };
    }
    case 'REVIEW_ENTERED':
      return {
        ...state,
        isReviewMode: true,
        reviewQuestion: action.payload.questionIndex,
        currentQuestion: action.payload.questionIndex,
      };
    case 'REVIEW_EXITED':
      return {
        ...state,
        isReviewMode: false,
        reviewQuestion: null,
      };
    default:
      return state;
  }
};
