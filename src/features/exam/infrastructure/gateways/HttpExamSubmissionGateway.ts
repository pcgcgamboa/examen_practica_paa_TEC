import { AUTH_CONFIG } from '../../../auth/config/auth.config';
import type { ExamSubmissionGateway } from '../../application/ports/ExamSubmissionGateway';
import type { AuthenticatedUser } from '../../../auth/domain/auth.types';
import type { ExamData, SubmissionResult } from '../../domain/types/exam.types';
import { mapExamSubmissionRequest } from '../mappers/ExamSubmissionMapper';
import { PublicIpProvider } from '../providers/PublicIpProvider';
import type { ApiResponse } from '../../../auth/infrastructure/contracts/authApi.types';

export class HttpExamSubmissionGateway implements ExamSubmissionGateway {
  private readonly ipProvider: PublicIpProvider;

  constructor(ipProvider: PublicIpProvider) {
    this.ipProvider = ipProvider;
  }

  async submitExam(examData: ExamData, user: AuthenticatedUser): Promise<SubmissionResult> {
    try {
      const ipAddress = await this.ipProvider.getClientIp();
      const request = mapExamSubmissionRequest(examData, user, ipAddress);

      const response = await fetch(`${AUTH_CONFIG.apiBaseUrl}/api/PPAA/InsertarPPAA`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          idpersona: request.headers.IdPersona.toString(),
          correoelectronico: request.headers.CorreoElectronico,
          ipaddress: request.headers.IpAddress,
          tokenseguridad: request.headers.tokenSeguridad,
        },
        body: JSON.stringify(request.body),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }

      const apiResponse: ApiResponse<unknown> = await response.json();

      if (apiResponse.CodigoRespuesta !== 0) {
        return {
          success: false,
          message: apiResponse.MensajeRespuesta || 'Error al enviar el examen',
        };
      }

      return {
        success: true,
        message: apiResponse.MensajeRespuesta || 'Examen enviado exitosamente',
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Error al enviar el examen al servidor',
      };
    }
  }
}
