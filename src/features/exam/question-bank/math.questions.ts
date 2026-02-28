import { questions as allQuestions } from './all.questions';

export const mathQuestions = allQuestions.filter((question) => question.area === 1);
