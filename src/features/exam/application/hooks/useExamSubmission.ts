import { downloadJson } from '../../../../shared/lib/browser/downloadJson';
import type { Logger } from '../../../../shared/lib/logging/logger';
import type { AuthenticatedUser } from '../../../auth/domain/auth.types';
import type { ExamConfiguration, ExamSessionAction, ExamSessionState } from '../../domain/types/exam.types';
import type { DeviceInfoProvider } from '../ports/DeviceInfoProvider';
import type { ExamSubmissionGateway } from '../ports/ExamSubmissionGateway';
import { buildExamSubmission } from '../use-cases/buildExamSubmission';
import { finishExam } from '../use-cases/finishExam';
import { examSessionActions } from '../reducers/examSession.actions';
import { examSessionReducer } from '../reducers/examSessionReducer';

interface UseExamSubmissionParams {
  state: ExamSessionState;
  dispatch: (action: ExamSessionAction) => void;
  examConfig: ExamConfiguration;
  submissionGateway: ExamSubmissionGateway;
  deviceInfoProvider: DeviceInfoProvider;
  logger: Logger;
}

export const useExamSubmission = ({
  state,
  dispatch,
  examConfig,
  submissionGateway,
  deviceInfoProvider,
  logger,
}: UseExamSubmissionParams) => {
  const submitCurrentSession = async (
    actionCreator: (timestamp: number) => ExamSessionAction,
    user: AuthenticatedUser | null,
    consentTimestamp: string | null,
  ) => {
    const action = actionCreator(Date.now());
    const nextState = examSessionReducer(state, action);
    dispatch(action);

    const examData = buildExamSubmission({
      user,
      consentTimestamp,
      deviceInfoProvider,
      examConfig,
      state: nextState,
    });

    const filename = `exam_results_${user?.code || user?.email || 'guest'}_${Date.now()}.json`;
    let submissionResult = { success: false, message: 'Se genero la copia local del examen.' };

    if (user) {
      submissionResult = await submissionGateway.submitExam(examData, user);
    }

    downloadJson(filename, examData);
    logger.info('Exam submission result', submissionResult);

    return submissionResult;
  };

  const finishCurrentExam = (user: AuthenticatedUser | null, consentTimestamp: string | null) => {
    return submitCurrentSession(finishExam, user, consentTimestamp);
  };

  const expireCurrentExam = (user: AuthenticatedUser | null, consentTimestamp: string | null) => {
    return submitCurrentSession((timestamp) => examSessionActions.expireExam(timestamp), user, consentTimestamp);
  };

  return {
    finishCurrentExam,
    expireCurrentExam,
  };
};
