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

// ==================== NUEVAS INTERFACES PARA TRACKING ====================

/**
 * Interface para rastrear TODAS las interacciones del usuario con una pregunta
 * Incluye respuestas, tiempo, ayudas consultadas y visitas
 */
export interface QuestionInteraction {
  questionId: number;
  questionIndex: number;
  
  // Datos de respuesta
  selectedAnswer: number | null;
  isCorrect: boolean;
  wasChecked: boolean;
  
  // Interacciones de ayuda
  viewedHint: boolean;              // ¿Vio la pista?
  hintViewedAt?: number;            // Timestamp cuando vio la pista
  viewedFormulas: boolean;          // ¿Vio las fórmulas?
  formulasViewedAt?: number;        // Timestamp cuando vio las fórmulas
  
  // Tiempo
  timeSpent: number;                // Tiempo total en la pregunta (segundos)
  firstVisitAt: number;             // Primera vez que visitó la pregunta
  lastVisitAt: number;              // Última vez que visitó la pregunta
  visitCount: number;               // Cuántas veces visitó la pregunta
}

/**
 * Información del dispositivo del usuario
 * Permite analizar diferencias de rendimiento por plataforma
 */
export interface DeviceInfo {
  deviceType: 'desktop' | 'tablet' | 'mobile';
  screenWidth: number;
  screenHeight: number;
  userAgent: string;
  platform: string;
  isTouchDevice: boolean;
  browserName?: string;
  browserVersion?: string;
  os?: string;
}

/**
 * Datos completos del examen para enviar/descargar
 * Versión extendida con toda la información de tracking
 */
export interface ExamData {
  // Información del usuario
  user: User | null;
  
  // Información del dispositivo
  deviceInfo: DeviceInfo;
  
  // Fechas
  completionDate: string;
  startDate?: string;
  
  // Configuración del examen
  examConfiguration: {
    mathQuestions: number;
    verbalQuestions: number;
    totalQuestions: number;
    duration: number;
  };
  
  // Respuestas básicas (compatibilidad con versión anterior)
  answers: Array<{
    questionId: number;
    questionTitle: string;
    questionArea: number;
    selectedAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
  }>;
  
  // ===== NUEVO: Interacciones detalladas por pregunta =====
  questionInteractions: QuestionInteraction[];
  
  // Tiempos (compatibilidad)
  questionTimes: QuestionTimeTracking[];
  
  // Puntuaciones
  totalScore: number;
  scoreByArea: {
    math: number;
    verbal: number;
  };
  
  // ===== NUEVO: Estadísticas de uso de ayudas =====
  helpUsageStats: {
    totalHintsViewed: number;
    totalFormulasViewed: number;
    questionsWithHint: number;
    questionsWithFormulas: number;
  };
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

  // ===== NUEVO: Tracking de interacciones =====
  questionInteractions: QuestionInteraction[];
  examStartTime: number | null;
}

// ==================== TIPOS AUXILIARES ====================

/**
 * Tipo para los tamaños de fuente (accesibilidad)
 */
export type FontSize = 'small' | 'medium' | 'large';

/**
 * Tipo para el modo de ordenamiento de preguntas
 */
export type QuestionOrderMode = 'grouped' | 'mixed' | 'id-asc';

/**
 * Resumen de estadísticas de una pregunta específica
 * Útil para análisis de dificultad
 */
export interface QuestionStats {
  questionId: number;
  totalAttempts: number;
  correctAttempts: number;
  averageTime: number;
  hintsViewedCount: number;
  formulasViewedCount: number;
  averageVisits: number;
}

/**
 * Resumen de rendimiento por estudiante
 */
export interface StudentPerformance {
  userId: string;
  email: string;
  totalScore: number;
  scorePercentage: number;
  mathScore: number;
  verbalScore: number;
  totalTime: number;
  averageTimePerQuestion: number;
  hintsUsed: number;
  formulasUsed: number;
  deviceType: 'desktop' | 'tablet' | 'mobile';
  completionDate: string;
}