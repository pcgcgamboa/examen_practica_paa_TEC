import type { Question } from '../../domain/types/exam.types';

export interface QuestionBank {
  getAllQuestions(): Question[];
}
