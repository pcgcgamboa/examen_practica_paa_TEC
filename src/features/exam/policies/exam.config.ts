import type { ExamConfiguration } from '../domain/types/exam.types';

export const EXAM_CONFIG: ExamConfiguration = {
  mathQuestions: 64,
  verbalQuestions: 38,
  duration: 2.5 * 60 * 60,
  allowNavigation: true,
  showTimer: true,
  questionOrder: 'id-asc',
  randomizeQuestions: false,
};
