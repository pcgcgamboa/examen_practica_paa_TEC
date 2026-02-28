import React from 'react';
import type { Question } from '../../domain/types/exam.types';
import type { DialogType } from '../../../../shared/types/common.types';
import ExamHeader from '../components/ExamHeader';
import ExamTimer from '../components/ExamTimer';
import QuestionCard from '../components/QuestionCard';
import styles from '../styles/examPresentation.module.css';

interface ExamScreenProps {
  questions: Question[];
  currentQuestionIndex: number;
  timerKey: number;
  isRunning: boolean;
  duration: number;
  userAnswers: Array<number | null>;
  checkedQuestions: boolean[];
  onLogout: () => void;
  onAnswerSelect: (answerIndex: number) => void;
  onCheckAnswer: () => void;
  onNavigateToQuestion: (questionIndex: number) => void;
  onPreviousQuestion: () => void;
  onNextQuestion: () => void;
  onFinishExam: () => void;
  onHintViewed: () => void;
  onFormulasViewed: () => void;
  onOpenDialog: (title: string, message: string, type: DialogType, onConfirm?: () => void) => void;
  onTimeUp: () => void;
}

const ExamScreen: React.FC<ExamScreenProps> = ({
  questions,
  currentQuestionIndex,
  timerKey,
  isRunning,
  duration,
  userAnswers,
  checkedQuestions,
  onLogout,
  onAnswerSelect,
  onCheckAnswer,
  onNavigateToQuestion,
  onPreviousQuestion,
  onNextQuestion,
  onFinishExam,
  onHintViewed,
  onFormulasViewed,
  onOpenDialog,
  onTimeUp,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const showExplanation = checkedQuestions[currentQuestionIndex];

  return (
    <div className={styles.examPage}>
      <ExamHeader
        examTitle="Practica de Examen de Admision - Matematicas"
        onFinishExam={onFinishExam}
        onLogout={onLogout}
        showFinishButton={true}
        showLogoutButton={true}
      />

      <div className={styles.examContent}>
        <div className={styles.timerSection}>
          <ExamTimer
            key={timerKey}
            initialTime={duration}
            isRunning={isRunning}
            onTimeUp={() => {
              onOpenDialog(
                'Tiempo Agotado',
                'El tiempo del examen ha finalizado. Tus respuestas seran procesadas automaticamente.',
                'alert',
                onTimeUp,
              );
            }}
          />
        </div>

        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={userAnswers[currentQuestionIndex]}
          checked={checkedQuestions[currentQuestionIndex]}
          correctAnswer={currentQuestion.correctAnswer}
          showExplanation={showExplanation}
          userAnswers={userAnswers}
          checkedQuestions={checkedQuestions}
          allQuestions={questions}
          onAnswerSelect={onAnswerSelect}
          onCheckAnswer={onCheckAnswer}
          onNavigateToQuestion={onNavigateToQuestion}
          onHintViewed={onHintViewed}
          onFormulasViewed={onFormulasViewed}
        />

        <div className={styles.navigationButtons}>
          <button className={styles.previousButton} onClick={onPreviousQuestion} disabled={currentQuestionIndex === 0}>
            Anterior
          </button>

          {currentQuestionIndex < questions.length - 1 ? (
            <button className={styles.nextButton} onClick={onNextQuestion}>
              Siguiente
            </button>
          ) : (
            <button onClick={onFinishExam} className={styles.finishExamButton}>
              Finalizar Examen
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamScreen;
