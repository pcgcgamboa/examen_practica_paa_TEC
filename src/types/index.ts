import type { oSolicitante } from "./apiTypes";

export interface Question {
  id: number;
  title: string;
  content: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  area: number;
  dificultad: number;
  peso: number;
  pista: string;
  estado: number;
}

export interface User {
  email: string;
  code: string;
  solicitante?: oSolicitante;
}

// NUEVO: Interfaz para trackear tiempo por pregunta
export interface QuestionTimeTracking {
  questionId: number;
  timeSpent: number; // en segundos
  timestamp: number; // cuando se empezó a responder
}

export interface ExamState {
  isAuthenticated: boolean;
  isExamStarted: boolean;
  isExamFinished: boolean;
  currentQuestion: number;
  userAnswers: (number | null)[];
  checkedQuestions: boolean[]; // NUEVO: Para saber qué preguntas ya fueron validadas
  timeRemaining: number;
  questionTimes: QuestionTimeTracking[]; // NUEVO: Lista de tiempos por pregunta
  currentQuestionStartTime: number | null; // NUEVO: Timestamp de inicio de pregunta actual
  showWelcome: boolean; // NUEVO: Para mostrar página de bienvenida
  selectedQuestions: Question[]; // ← NUEVO: Preguntas seleccionadas para este examen
  isReviewMode: boolean; // ← NUEVO: Indica si está en modo revisión
  reviewQuestion: number | null; // ← NUEVO: Índice de pregunta en revisión
}