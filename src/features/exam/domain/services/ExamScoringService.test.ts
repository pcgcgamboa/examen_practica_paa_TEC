import { describe, expect, it } from 'vitest';
import { getScoreByArea, getTotalCorrectAnswers } from './ExamScoringService';
import type { Question } from '../types/exam.types';

const questions: Question[] = [
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
    pista: '',
    estado: 1,
  },
  {
    id: 2,
    title: 'Pregunta 2',
    content: 'Contenido',
    options: ['A', 'B'],
    correctAnswer: 1,
    explanation: 'Explicacion',
    area: 2,
    dificultad: 1,
    peso: 1,
    pista: '',
    estado: 1,
  },
];

describe('ExamScoringService', () => {
  it('counts the total correct answers', () => {
    expect(getTotalCorrectAnswers(questions, [0, 0])).toBe(1);
    expect(getTotalCorrectAnswers(questions, [0, 1])).toBe(2);
  });

  it('returns the score grouped by area', () => {
    expect(getScoreByArea(questions, [0, 0])).toEqual({
      math: 1,
      verbal: 0,
    });
  });
});
