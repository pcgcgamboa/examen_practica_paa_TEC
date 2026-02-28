import React from 'react';
import type { Question } from '../../domain/types/exam.types';
import MathJaxHtml from '../../../../shared/ui/MathJaxHtml/MathJaxHtml';
import ExamHeader from '../components/ExamHeader';
import ReviewNavigation from '../components/ReviewNavigation';
import styles from '../styles/examPresentation.module.css';

interface ReviewScreenProps {
  questions: Question[];
  reviewQuestionIndex: number;
  userAnswers: Array<number | null>;
  onLogout: () => void;
  onBackToResults: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({
  questions,
  reviewQuestionIndex,
  userAnswers,
  onLogout,
  onBackToResults,
  onPrevious,
  onNext,
}) => {
  const reviewQuestion = questions[reviewQuestionIndex];
  const isCorrect = userAnswers[reviewQuestionIndex] === reviewQuestion.correctAnswer;

  return (
    <div className={styles.reviewPage}>
      <ExamHeader examTitle="Revision de Examen" onLogout={onLogout} showFinishButton={false} showLogoutButton={true} />

      <div className={styles.reviewContent}>
        <div className={styles.reviewHeader}>
          <button className={styles.backToResultsButton} onClick={onBackToResults}>
            Volver a Resultados
          </button>

          <div className={styles.reviewInfo}>
            <h2 className={styles.reviewHeading}>
              Pregunta {reviewQuestionIndex + 1} de {questions.length}
            </h2>
            <span className={`${styles.reviewStatus} ${isCorrect ? styles.reviewStatusCorrect : styles.reviewStatusIncorrect}`}>
              {isCorrect ? 'Respuesta Correcta' : 'Respuesta Incorrecta'}
            </span>
          </div>
        </div>

        <div className={styles.reviewQuestionContainer}>
          <div className={styles.questionTitle}>{reviewQuestion.title}</div>

          <div className={styles.questionContent}>
            <MathJaxHtml text={reviewQuestion.content} />
          </div>

          <div className={styles.options}>
            {reviewQuestion.options.map((option, index) => {
              const isUserAnswer = userAnswers[reviewQuestionIndex] === index;
              const isCorrectAnswer = index === reviewQuestion.correctAnswer;
              let optionClass = `${styles.option} ${styles.reviewOption}`;

              if (isCorrectAnswer) {
                optionClass += ` ${styles.optionCorrect}`;
              }

              if (isUserAnswer && !isCorrectAnswer) {
                optionClass += ` ${styles.optionIncorrect}`;
              }

              if (isUserAnswer) {
                optionClass += ` ${styles.userSelected}`;
              }

              return (
                <div key={index} className={optionClass}>
                  <span className={styles.optionNumber}>{index + 1}</span>
                  <MathJaxHtml text={option} />
                  {isUserAnswer && <span className={styles.userAnswerBadge}>Tu respuesta</span>}
                  {isCorrectAnswer && <span className={styles.correctAnswerBadge}>Respuesta correcta</span>}
                </div>
              );
            })}
          </div>

          <div className={styles.explanationBox}>
            <div className={styles.explanationTitle}>Explicacion</div>
            <MathJaxHtml text={reviewQuestion.explanation} />
          </div>
        </div>

        <ReviewNavigation
          onPrevious={onPrevious}
          onNext={onNext}
          onBackToResults={onBackToResults}
          isFirst={reviewQuestionIndex === 0}
          isLast={reviewQuestionIndex === questions.length - 1}
        />
      </div>
    </div>
  );
};

export default ReviewScreen;
