import type { Question, QuestionOrderMode } from '../types/exam.types';

export interface QuestionOrderingStrategy {
  order(mathQuestions: Question[], verbalQuestions: Question[]): Question[];
}

class GroupedQuestionOrderingStrategy implements QuestionOrderingStrategy {
  order(mathQuestions: Question[], verbalQuestions: Question[]): Question[] {
    return [...mathQuestions, ...verbalQuestions];
  }
}

class MixedQuestionOrderingStrategy implements QuestionOrderingStrategy {
  order(mathQuestions: Question[], verbalQuestions: Question[]): Question[] {
    const questions = [...mathQuestions, ...verbalQuestions];

    for (let index = questions.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [questions[index], questions[swapIndex]] = [questions[swapIndex], questions[index]];
    }

    return questions;
  }
}

class IdAscQuestionOrderingStrategy implements QuestionOrderingStrategy {
  order(mathQuestions: Question[], verbalQuestions: Question[]): Question[] {
    return [...mathQuestions, ...verbalQuestions].sort((left, right) => left.id - right.id);
  }
}

export const createQuestionOrderingStrategy = (mode: QuestionOrderMode): QuestionOrderingStrategy => {
  switch (mode) {
    case 'grouped':
      return new GroupedQuestionOrderingStrategy();
    case 'mixed':
      return new MixedQuestionOrderingStrategy();
    default:
      return new IdAscQuestionOrderingStrategy();
  }
};
