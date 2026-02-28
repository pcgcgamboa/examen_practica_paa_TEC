import type { Question } from '../types/exam.types';

export const getTotalCorrectAnswers = (questions: Question[], answers: Array<number | null>): number => {
  return answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
};

export const getScoreByArea = (questions: Question[], answers: Array<number | null>) => {
  return {
    math: answers.filter((answer, index) => questions[index].area === 1 && answer === questions[index].correctAnswer).length,
    verbal: answers.filter((answer, index) => questions[index].area === 2 && answer === questions[index].correctAnswer).length,
  };
};
