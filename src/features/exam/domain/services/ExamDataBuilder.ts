import type { AuthenticatedUser } from '../../../auth/domain/auth.types';
import type { DeviceInfo, ExamConfiguration, ExamData, ExamSessionState } from '../types/exam.types';
import { getScoreByArea, getTotalCorrectAnswers } from './ExamScoringService';

interface BuildExamDataParams {
  user: AuthenticatedUser | null;
  consentTimestamp: string | null;
  deviceInfo: DeviceInfo;
  examConfig: ExamConfiguration;
  state: ExamSessionState;
}

export const buildExamData = ({
  user,
  consentTimestamp,
  deviceInfo,
  examConfig,
  state,
}: BuildExamDataParams): ExamData => {
  const totalScore = getTotalCorrectAnswers(state.questions, state.userAnswers);
  const scoreByArea = getScoreByArea(state.questions, state.userAnswers);

  return {
    user,
    completionDate: new Date().toISOString(),
    startDate: state.examStartTime ? new Date(state.examStartTime).toISOString() : undefined,
    consent: {
      given: true,
      timestamp: consentTimestamp,
    },
    deviceInfo,
    examConfiguration: {
      mathQuestions: examConfig.mathQuestions,
      verbalQuestions: examConfig.verbalQuestions,
      totalQuestions: state.questions.length,
      duration: examConfig.duration,
    },
    answers: state.userAnswers.map((answer, index) => ({
      questionId: state.questions[index].id,
      questionTitle: state.questions[index].title,
      questionArea: state.questions[index].area,
      selectedAnswer: answer,
      correctAnswer: state.questions[index].correctAnswer,
      isCorrect: answer === state.questions[index].correctAnswer,
    })),
    questionInteractions: state.questionInteractions,
    questionTimes: state.questionTimes,
    totalScore,
    scoreByArea,
    helpUsageStats: {
      totalHintsViewed: state.questionInteractions.filter((entry) => entry.viewedHint).length,
      totalFormulasViewed: state.questionInteractions.filter((entry) => entry.viewedFormulas).length,
      questionsWithHint: state.questions.filter((question) => question.pista && question.pista.trim().length > 0).length,
      questionsWithFormulas: state.questions.filter((question) => question.area === 1).length,
    },
  };
};
