import { LocalConsentStore } from '../../features/consent/infrastructure/storage/LocalConsentStore';
import { BrowserDeviceInfoProvider } from '../../features/exam/infrastructure/providers/BrowserDeviceInfoProvider';
import { HttpExamSubmissionGateway } from '../../features/exam/infrastructure/gateways/HttpExamSubmissionGateway';
import { PublicIpProvider } from '../../features/exam/infrastructure/providers/PublicIpProvider';
import { StaticQuestionBank } from '../../features/exam/infrastructure/repositories/StaticQuestionBank';
import { EXAM_CONFIG } from '../../features/exam/policies/exam.config';

const consentStore = new LocalConsentStore();
const questionBank = new StaticQuestionBank();
const publicIpProvider = new PublicIpProvider();
const submissionGateway = new HttpExamSubmissionGateway(publicIpProvider);
const deviceInfoProvider = new BrowserDeviceInfoProvider();

export const appShellDependencies = {
  consentStore,
  questionBank,
  submissionGateway,
  deviceInfoProvider,
  examConfig: EXAM_CONFIG,
  consentPdfUrl:
    'https://www.tec.ac.cr/sites/default/files/media/doc/cuaderno_de_ejercicios_para_la_paa_tec-2025-cea-1.pdf',
};
