import type { QuestionBank } from '../ports/QuestionBank';
import type { ExamConfiguration, ExamSessionState } from '../../domain/types/exam.types';
import { createQuestionInteractions } from '../../domain/services/ExamTrackingService';
import { createQuestionOrderingStrategy } from '../../domain/services/QuestionOrderingStrategy';
import { createQuestionSelectionStrategy } from '../../domain/services/QuestionSelectionStrategy';

export const createExamSession = (
  questionBank: QuestionBank,
  config: ExamConfiguration,
  sessionVersion: number,
  showWelcome: boolean,
): ExamSessionState => {
  const allQuestions = questionBank.getAllQuestions();
  const mathPool = allQuestions.filter((question) => question.area === 1);
  const verbalPool = allQuestions.filter((question) => question.area === 2);
  const selectionStrategy = createQuestionSelectionStrategy(config.randomizeQuestions);
  const orderingStrategy = createQuestionOrderingStrategy(config.questionOrder);
  const selectedMath = selectionStrategy.select(mathPool, config.mathQuestions);
  const selectedVerbal = selectionStrategy.select(verbalPool, config.verbalQuestions);
  const questions = orderingStrategy.order(selectedMath, selectedVerbal);

  return {
    questions,
    currentQuestion: 0,
    userAnswers: Array(questions.length).fill(null),
    checkedQuestions: Array(questions.length).fill(false),
    questionTimes: [],
    currentQuestionStartTime: null,
    questionInteractions: createQuestionInteractions(questions),
    examStartTime: null,
    isExamStarted: false,
    isExamFinished: false,
    isReviewMode: false,
    reviewQuestion: null,
    showWelcome,
    sessionVersion,
  };
};
