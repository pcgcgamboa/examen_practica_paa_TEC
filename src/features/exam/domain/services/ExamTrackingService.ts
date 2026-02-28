import type { ExamSessionState, Question, QuestionInteraction } from '../types/exam.types';

export const createQuestionInteractions = (questions: Question[]): QuestionInteraction[] => {
  return questions.map((question, index) => ({
    questionId: question.id,
    questionIndex: index,
    selectedAnswer: null,
    isCorrect: false,
    wasChecked: false,
    viewedHint: false,
    viewedFormulas: false,
    timeSpent: 0,
    firstVisitAt: 0,
    lastVisitAt: 0,
    visitCount: 0,
  }));
};

export const markQuestionVisited = (state: ExamSessionState, questionIndex: number, timestamp: number): ExamSessionState => {
  const questionInteractions = [...state.questionInteractions];
  const current = questionInteractions[questionIndex];

  questionInteractions[questionIndex] = {
    ...current,
    firstVisitAt: current.firstVisitAt || timestamp,
    lastVisitAt: timestamp,
    visitCount: current.visitCount + 1,
  };

  return {
    ...state,
    questionInteractions,
  };
};

export const markHintViewed = (state: ExamSessionState, questionIndex: number, timestamp: number): ExamSessionState => {
  const questionInteractions = [...state.questionInteractions];
  const current = questionInteractions[questionIndex];

  if (current.viewedHint) {
    return state;
  }

  questionInteractions[questionIndex] = {
    ...current,
    viewedHint: true,
    hintViewedAt: timestamp,
  };

  return {
    ...state,
    questionInteractions,
  };
};

export const markFormulasViewed = (state: ExamSessionState, questionIndex: number, timestamp: number): ExamSessionState => {
  const questionInteractions = [...state.questionInteractions];
  const current = questionInteractions[questionIndex];

  if (current.viewedFormulas) {
    return state;
  }

  questionInteractions[questionIndex] = {
    ...current,
    viewedFormulas: true,
    formulasViewedAt: timestamp,
  };

  return {
    ...state,
    questionInteractions,
  };
};

export const markQuestionChecked = (state: ExamSessionState): ExamSessionState => {
  const questionIndex = state.currentQuestion;
  const answer = state.userAnswers[questionIndex];

  if (answer === null) {
    return state;
  }

  const checkedQuestions = [...state.checkedQuestions];
  checkedQuestions[questionIndex] = true;

  const questionInteractions = [...state.questionInteractions];
  questionInteractions[questionIndex] = {
    ...questionInteractions[questionIndex],
    selectedAnswer: answer,
    isCorrect: answer === state.questions[questionIndex].correctAnswer,
    wasChecked: true,
  };

  return {
    ...state,
    checkedQuestions,
    questionInteractions,
  };
};

export const recordCurrentQuestionTime = (state: ExamSessionState, timestamp: number): ExamSessionState => {
  if (state.currentQuestionStartTime === null) {
    return state;
  }

  const timeSpent = Math.max(0, Math.floor((timestamp - state.currentQuestionStartTime) / 1000));
  const questionId = state.questions[state.currentQuestion].id;
  const questionTimes = [...state.questionTimes];
  const existingIndex = questionTimes.findIndex((entry) => entry.questionId === questionId);

  if (existingIndex >= 0) {
    questionTimes[existingIndex] = {
      ...questionTimes[existingIndex],
      timeSpent: questionTimes[existingIndex].timeSpent + timeSpent,
    };
  } else {
    questionTimes.push({
      questionId,
      timeSpent,
      timestamp: state.currentQuestionStartTime,
    });
  }

  const questionInteractions = [...state.questionInteractions];
  questionInteractions[state.currentQuestion] = {
    ...questionInteractions[state.currentQuestion],
    timeSpent: questionInteractions[state.currentQuestion].timeSpent + timeSpent,
  };

  return {
    ...state,
    questionTimes,
    questionInteractions,
    currentQuestionStartTime: null,
  };
};
