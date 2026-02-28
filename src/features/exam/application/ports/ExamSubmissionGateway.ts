import type { AuthenticatedUser } from '../../../auth/domain/auth.types';
import type { ExamData, SubmissionResult } from '../../domain/types/exam.types';

export interface ExamSubmissionGateway {
  submitExam(examData: ExamData, user: AuthenticatedUser): Promise<SubmissionResult>;
}
