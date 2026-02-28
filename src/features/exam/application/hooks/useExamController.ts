import type { Logger } from '../../../../shared/lib/logging/logger';
import type { DeviceInfoProvider } from '../ports/DeviceInfoProvider';
import type { ExamSubmissionGateway } from '../ports/ExamSubmissionGateway';
import type { QuestionBank } from '../ports/QuestionBank';
import type { ExamConfiguration } from '../../domain/types/exam.types';
import { useExamSession } from './useExamSession';
import { useExamSubmission } from './useExamSubmission';

interface UseExamControllerParams {
  questionBank: QuestionBank;
  examConfig: ExamConfiguration;
  submissionGateway: ExamSubmissionGateway;
  deviceInfoProvider: DeviceInfoProvider;
  logger: Logger;
}

export const useExamController = ({
  questionBank,
  examConfig,
  submissionGateway,
  deviceInfoProvider,
  logger,
}: UseExamControllerParams) => {
  const examSession = useExamSession({
    questionBank,
    examConfig,
  });
  const { dispatch, ...sessionController } = examSession;
  const submissionController = useExamSubmission({
    state: sessionController.state,
    dispatch,
    examConfig,
    submissionGateway,
    deviceInfoProvider,
    logger,
  });

  return {
    ...sessionController,
    ...submissionController,
  };
};
