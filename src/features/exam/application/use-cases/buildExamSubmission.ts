import type { AuthenticatedUser } from '../../../auth/domain/auth.types';
import type { DeviceInfoProvider } from '../ports/DeviceInfoProvider';
import type { ExamConfiguration, ExamSessionState } from '../../domain/types/exam.types';
import { buildExamData } from '../../domain/services/ExamDataBuilder';

interface BuildExamSubmissionParams {
  user: AuthenticatedUser | null;
  consentTimestamp: string | null;
  deviceInfoProvider: DeviceInfoProvider;
  examConfig: ExamConfiguration;
  state: ExamSessionState;
}

export const buildExamSubmission = ({
  user,
  consentTimestamp,
  deviceInfoProvider,
  examConfig,
  state,
}: BuildExamSubmissionParams) => {
  return buildExamData({
    user,
    consentTimestamp,
    deviceInfo: deviceInfoProvider.getDeviceInfo(),
    examConfig,
    state,
  });
};
