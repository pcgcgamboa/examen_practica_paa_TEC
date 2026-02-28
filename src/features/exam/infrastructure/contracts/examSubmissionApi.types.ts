export interface ExamSubmissionBody {
  IdCarnet: number | null;
  Carnet: string;
  NumIntento: number;
  DatosPrueba: string;
}

export interface ExamSubmissionHeaders {
  IdPersona: number;
  CorreoElectronico: string;
  IpAddress: string;
  tokenSeguridad: string;
}
