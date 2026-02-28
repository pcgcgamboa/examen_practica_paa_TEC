import { questions as allQuestions } from './all.questions';

export const verbalQuestions = allQuestions.filter((question) => question.area === 2);
