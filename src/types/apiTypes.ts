// Tipos basados en las clases C# de la Web API

export interface oRespuesta<T> {
  CodigoRespuesta: number;
  MensajeRespuesta: string;
  ObjetoRespuesta: T | null;
  Estado: boolean;
}

export interface oSolicitante {
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

export interface SolicitanteLoginRequest {
  CorreoElectronico: string;
  Password: string;
  IpAddress: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  solicitante?: oSolicitante;
  requirePasswordChange?: boolean;
}
