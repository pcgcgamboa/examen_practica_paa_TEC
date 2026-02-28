import type { ApiResponse, AuthApiApplicant, AuthApiLoginRequest } from '../contracts/authApi.types';
import type { AuthGateway } from '../../application/ports/AuthGateway';
import type { AuthResult } from '../../domain/auth.types';
import { AUTH_CONFIG } from '../../config/auth.config';
import { PublicIpProvider } from '../../../exam/infrastructure/providers/PublicIpProvider';

export class WebApiAuthGateway implements AuthGateway {
  private readonly ipProvider: PublicIpProvider;

  constructor(ipProvider: PublicIpProvider) {
    this.ipProvider = ipProvider;
  }

  async authenticate(email: string, password: string): Promise<AuthResult> {
    try {
      const ipAddress = await this.ipProvider.getClientIp();
      const loginRequest: AuthApiLoginRequest = {
        CorreoElectronico: email,
        Password: password,
        IpAddress: ipAddress,
      };

      const response = await fetch(`${AUTH_CONFIG.apiBaseUrl}/api/PPAA/ValidaUsuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(loginRequest),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }

      const apiResponse: ApiResponse<AuthApiApplicant> = await response.json();

      if (apiResponse.CodigoRespuesta !== 0) {
        return {
          success: false,
          message: apiResponse.MensajeRespuesta || 'Error en la autenticacion',
        };
      }

      if (!apiResponse.ObjetoRespuesta) {
        return {
          success: false,
          message: 'Credenciales incorrectas. Verifica tu correo y contrasena.',
        };
      }

      return {
        success: true,
        message: apiResponse.MensajeRespuesta || 'Autenticacion exitosa',
        user: {
          email,
          code: '',
          solicitante: apiResponse.ObjetoRespuesta,
        },
        requirePasswordChange: apiResponse.ObjetoRespuesta.OcupaCambioContrasena,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Error al conectar con el servidor de autenticacion',
      };
    }
  }
}
