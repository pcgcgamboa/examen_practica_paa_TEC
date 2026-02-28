import { describe, expect, it } from 'vitest';
import { examSessionReducer } from './examSessionReducer';
import { examSessionActions } from './examSession.actions';
import type { ExamSessionState } from '../../domain/types/exam.types';

const baseState: ExamSessionState = {
  questions: [
    {
      id: 1,
      title: 'Pregunta 1',
      content: 'Contenido',
      options: ['A', 'B'],
      correctAnswer: 0,
      explanation: 'Explicacion',
      area: 1,
      dificultad: 1,
      peso: 1,
      pista: 'Pista',
      estado: 1,
    },
  ],
  currentQuestion: 0,
  userAnswers: [null],
  checkedQuestions: [false],
  questionTimes: [],
  currentQuestionStartTime: null,
  questionInteractions: [
    {
      questionId: 1,
      questionIndex: 0,
      selectedAnswer: null,
      isCorrect: false,
      wasChecked: false,
      viewedHint: false,
      viewedFormulas: false,
      timeSpent: 0,
      firstVisitAt: 0,
      lastVisitAt: 0,
      visitCount: 0,
    },
  ],
  examStartTime: null,
  isExamStarted: false,
  isExamFinished: false,
  isReviewMode: false,
  reviewQuestion: null,
  showWelcome: false,
  sessionVersion: 1,
};

describe('examSessionReducer', () => {
  it('stores the selected answer', () => {
    const nextState = examSessionReducer(baseState, examSessionActions.selectAnswer(1));
    expect(nextState.userAnswers[0]).toBe(1);
  });

  it('marks the question as checked and stores interaction details', () => {
    const answeredState = examSessionReducer(baseState, examSessionActions.selectAnswer(0));
    const checkedState = examSessionReducer(answeredState, examSessionActions.checkQuestion());

    expect(checkedState.checkedQuestions[0]).toBe(true);
    expect(checkedState.questionInteractions[0].wasChecked).toBe(true);
    expect(checkedState.questionInteractions[0].isCorrect).toBe(true);
  });
});
