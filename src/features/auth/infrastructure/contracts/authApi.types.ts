export interface ApiResponse<T> {
  CodigoRespuesta: number;
  MensajeRespuesta: string;
  ObjetoRespuesta: T | null;
  Estado: boolean;
}

export interface AuthApiApplicant {
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

export interface AuthApiLoginRequest {
  CorreoElectronico: string;
  Password: string;
  IpAddress: string;
}
