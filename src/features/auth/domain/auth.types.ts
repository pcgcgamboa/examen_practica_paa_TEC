export interface AuthenticatedApplicant {
  IdPersona: number;
  Identificacion: string;
  Nombre: string;
  Apellido1: string;
  Apellido2: string;
  OcupaCambioContrasena: boolean;
  AceptaConsentimientoInf: boolean;
  CorreoElectronico: string;
  IdCarnet: number;
  Carnet: string;
  IdProcesoAdmision: number | null;
  IdFormaIngreso: number;
  NombreProcesoAdmision: string;
}

export interface AuthenticatedUser {
  email: string;
  code: string;
  solicitante?: AuthenticatedApplicant;
}

export interface AuthResult {
  success: boolean;
  message: string;
  user?: AuthenticatedUser;
  requirePasswordChange?: boolean;
}
