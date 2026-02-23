// Tipos para el envío del examen a la API

export interface oPPAAAplicada {
  IdCarnet: number | null;
  Carnet: string;
  NumIntento: number;
  DatosPrueba: string; // JSON stringificado
}

export interface ExamSubmissionHeaders {
  IdPersona: number;
  CorreoElectronico: string;
  IpAddress: string;
  tokenSeguridad: string;
}

export interface ExamSubmissionRequest {
  body: oPPAAAplicada;
  headers: ExamSubmissionHeaders;
}
