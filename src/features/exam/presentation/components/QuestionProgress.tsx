import React from 'react';
import type { Question } from '../../domain/types/exam.types';
import styles from '../styles/examPresentation.module.css';

interface QuestionProgressProps {
  currentQuestionNumber: number;
  totalQuestions: number;
  checkedQuestions: boolean[];
  userAnswers: Array<number | null>;
  allQuestions: Question[];
  onNavigateToQuestion: (questionIndex: number) => void;
}

const QuestionProgress: React.FC<QuestionProgressProps> = ({
  currentQuestionNumber,
  totalQuestions,
  checkedQuestions,
  userAnswers,
  allQuestions,
  onNavigateToQuestion,
}) => {
  return (
    <div className={styles.questionHeader}>
    <div className={styles.progressContainer}>
      <div className={styles.progressHeader}>
        <span className={styles.questionCounter}>
          Pregunta <span className={styles.currentNumber}>{currentQuestionNumber}</span> de{' '}
          <span className={styles.totalNumber}>{totalQuestions}</span>
        </span>
        <div className={styles.progressLegend}>
          <div className={styles.legendGroup}>
            <span className={styles.legendLabel}>Estado:</span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendBox} ${styles.statusChecked}`}></span> Chequeada
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendBox} ${styles.statusAnswered}`}></span> Respondida
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendBox} ${styles.statusCurrent}`}></span> Actual
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendBox} ${styles.statusUnanswered}`}></span> Sin responder
            </span>
          </div>
          <span className={styles.legendDivider}>|</span>
          <div className={styles.legendGroup}>
            <span className={styles.legendLabel}>Area:</span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendBox} ${styles.areaMath}`}></span> Matematico
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendBox} ${styles.areaVerbal}`}></span> Verbal
            </span>
          </div>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressSegments}>
          {allQuestions.map((q, index) => {
            const isCurrent = index + 1 === currentQuestionNumber;
            const isChecked = checkedQuestions[index];
            const hasAnswer = userAnswers[index] !== null;
            const questionArea = q.area; // 1: Math, 2: Verbal

            let statusClass = styles.statusUnanswered;
            let statusName = 'Sin responder';

            if (isChecked) {
              statusClass = styles.statusChecked;
              statusName = 'Chequeada';
            } else if (hasAnswer) {
              statusClass = styles.statusAnswered;
              statusName = 'Respondida';
            }

            if (isCurrent) {
              statusClass = styles.statusCurrent;
              statusName = 'Actual';
            }

            const areaClass = `${styles.segmentArea} ${questionArea === 1 ? styles.areaMath : styles.areaVerbal}`;
            const areaName = questionArea === 1 ? 'Matematico' : 'Verbal';

            return (
              <div
                key={index}
                className={`${styles.progressSegment} ${isCurrent ? styles.progressSegmentCurrent : ''}`}
                style={{ width: `${100 / totalQuestions}%` }}
                onClick={() => onNavigateToQuestion(index)}
                title={`Pregunta ${index + 1} - ${areaName} - ${statusName}`}
              >
                <div className={areaClass}></div>
                <div className={statusClass}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuestionProgress;
