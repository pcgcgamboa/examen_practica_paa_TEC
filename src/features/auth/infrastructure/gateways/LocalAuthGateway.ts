import type { AuthGateway } from '../../application/ports/AuthGateway';
import type { AuthResult } from '../../domain/auth.types';
import { LOCAL_CREDENTIALS } from '../../config/auth.config';

export class LocalAuthGateway implements AuthGateway {
  async authenticate(email: string, password: string): Promise<AuthResult> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (email === LOCAL_CREDENTIALS.email && password === LOCAL_CREDENTIALS.code) {
      return {
        success: true,
        message: 'Autenticacion local exitosa',
        user: {
          email,
          code: '',
          solicitante: {
            IdPersona: 1,
            Identificacion: '123456789',
            Nombre: 'Usuario',
            Apellido1: 'Prueba',
            Apellido2: 'Local',
            OcupaCambioContrasena: false,
            AceptaConsentimientoInf: true,
            CorreoElectronico: email,
            IdCarnet: 1,
            Carnet: 'TEST123',
            IdProcesoAdmision: 1,
            IdFormaIngreso: 1,
            NombreProcesoAdmision: 'Proceso de Prueba',
          },
        },
      };
    }

    return {
      success: false,
      message: `Credenciales incorrectas. Use ${LOCAL_CREDENTIALS.email} y codigo ${LOCAL_CREDENTIALS.code}`,
    };
  }
}
