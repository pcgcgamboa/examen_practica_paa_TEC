import { allQuestions } from '../../question-bank';
import type { QuestionBank } from '../../application/ports/QuestionBank';

export class StaticQuestionBank implements QuestionBank {
  getAllQuestions() {
    return [...allQuestions];
  }
}
