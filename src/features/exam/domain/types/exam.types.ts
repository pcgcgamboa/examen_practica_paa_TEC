import type { AuthenticatedUser } from '../../../auth/domain/auth.types';

export type QuestionOrderMode = 'grouped' | 'mixed' | 'id-asc';

export interface ExamConfiguration {
  mathQuestions: number;
  verbalQuestions: number;
  duration: number;
  allowNavigation: boolean;
  showTimer: boolean;
  questionOrder: QuestionOrderMode;
  randomizeQuestions: boolean;
}

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

export interface QuestionTimeTracking {
  questionId: number;
  timeSpent: number;
  timestamp: number;
}

export interface QuestionInteraction {
  questionId: number;
  questionIndex: number;
  selectedAnswer: number | null;
  isCorrect: boolean;
  wasChecked: boolean;
  viewedHint: boolean;
  hintViewedAt?: number;
  viewedFormulas: boolean;
  formulasViewedAt?: number;
  timeSpent: number;
  firstVisitAt: number;
  lastVisitAt: number;
  visitCount: number;
}

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

export interface ExamData {
  user: AuthenticatedUser | null;
  completionDate: string;
  startDate?: string;
  consent: {
    given: boolean;
    timestamp: string | null;
  };
  deviceInfo: DeviceInfo;
  examConfiguration: {
    mathQuestions: number;
    verbalQuestions: number;
    totalQuestions: number;
    duration: number;
  };
  answers: Array<{
    questionId: number;
    questionTitle: string;
    questionArea: number;
    selectedAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
  }>;
  questionInteractions: QuestionInteraction[];
  questionTimes: QuestionTimeTracking[];
  totalScore: number;
  scoreByArea: {
    math: number;
    verbal: number;
  };
  helpUsageStats: {
    totalHintsViewed: number;
    totalFormulasViewed: number;
    questionsWithHint: number;
    questionsWithFormulas: number;
  };
}

export interface ExamSessionState {
  questions: Question[];
  currentQuestion: number;
  userAnswers: Array<number | null>;
  checkedQuestions: boolean[];
  questionTimes: QuestionTimeTracking[];
  currentQuestionStartTime: number | null;
  questionInteractions: QuestionInteraction[];
  examStartTime: number | null;
  isExamStarted: boolean;
  isExamFinished: boolean;
  isReviewMode: boolean;
  reviewQuestion: number | null;
  showWelcome: boolean;
  sessionVersion: number;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
}

export type ExamSessionAction =
  | { type: 'SESSION_CREATED'; payload: { state: ExamSessionState } }
  | { type: 'WELCOME_CONTINUED' }
  | { type: 'EXAM_STARTED'; payload: { startedAt: number } }
  | { type: 'ANSWER_SELECTED'; payload: { answerIndex: number } }
  | { type: 'QUESTION_CHECKED' }
  | { type: 'QUESTION_NAVIGATED'; payload: { questionIndex: number; timestamp: number } }
  | { type: 'HINT_VIEWED'; payload: { questionIndex: number; timestamp: number } }
  | { type: 'FORMULAS_VIEWED'; payload: { questionIndex: number; timestamp: number } }
  | { type: 'EXAM_FINISHED'; payload: { timestamp: number } }
  | { type: 'TIME_EXPIRED'; payload: { timestamp: number } }
  | { type: 'REVIEW_ENTERED'; payload: { questionIndex: number } }
  | { type: 'REVIEW_EXITED' }
  | { type: 'SESSION_RESTARTED'; payload: { state: ExamSessionState } };
