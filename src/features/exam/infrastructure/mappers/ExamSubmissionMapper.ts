import type { AuthenticatedUser } from '../../../auth/domain/auth.types';
import type { ExamData } from '../../domain/types/exam.types';
import type { ExamSubmissionBody, ExamSubmissionHeaders } from '../contracts/examSubmissionApi.types';

export const mapExamSubmissionRequest = (examData: ExamData, user: AuthenticatedUser, ipAddress: string) => {
  const solicitante = user.solicitante;

  if (!solicitante) {
    throw new Error('No se encontraron datos del solicitante para enviar el examen.');
  }

  const body: ExamSubmissionBody = {
    IdCarnet: solicitante.IdCarnet,
    Carnet: solicitante.Carnet,
    NumIntento: 1,
    DatosPrueba: JSON.stringify(examData),
  };

  const headers: ExamSubmissionHeaders = {
    IdPersona: solicitante.IdPersona,
    CorreoElectronico: solicitante.CorreoElectronico,
    IpAddress: ipAddress,
    tokenSeguridad: '1',
  };

  return { body, headers };
};
