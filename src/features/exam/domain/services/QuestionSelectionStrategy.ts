import type { Question } from '../types/exam.types';

export interface AreaQuestionSelectionStrategy {
  select(questions: Question[], amount: number): Question[];
}

export class SequentialQuestionSelectionStrategy implements AreaQuestionSelectionStrategy {
  select(questions: Question[], amount: number): Question[] {
    return questions.slice(0, amount);
  }
}

export class RandomQuestionSelectionStrategy implements AreaQuestionSelectionStrategy {
  select(questions: Question[], amount: number): Question[] {
    const shuffled = [...questions];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled.slice(0, amount);
  }
}

export const createQuestionSelectionStrategy = (randomize: boolean): AreaQuestionSelectionStrategy => {
  if (randomize) {
    return new RandomQuestionSelectionStrategy();
  }

  return new SequentialQuestionSelectionStrategy();
};
