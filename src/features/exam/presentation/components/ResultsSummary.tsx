import React from 'react';
import styles from '../styles/examPresentation.module.css';

interface ResultsSummaryProps {
  correctAnswers: number;
  totalQuestions: number;
  percentage: string;
  correctMath: number;
  totalMath: number;
  mathPercentage: string;
  correctVerbal: number;
  totalVerbal: number;
  verbalPercentage: string;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  correctAnswers,
  totalQuestions,
  percentage,
  correctMath,
  totalMath,
  mathPercentage,
  correctVerbal,
  totalVerbal,
  verbalPercentage,
}) => {
  return (
    <>
      <div className={styles.scoreDisplay}>
        <div className={styles.scoreMain}>
          <div className={styles.score}>
            {correctAnswers}/{totalQuestions}
          </div>
          <div className={styles.percentage}>{percentage}% Correctas</div>
        </div>
      </div>

      <div className={styles.statsByArea}>
        <div className={`${styles.areaStat} ${styles.mathStat}`}>
          <div className={styles.areaIcon}>Mat</div>
          <div className={styles.areaInfo}>
            <h3>Razonamiento Matematico</h3>
            <div className={styles.areaScore}>
              {correctMath}/{totalMath} correctas
              <span className={styles.areaPercentage}>({mathPercentage}%)</span>
            </div>
          </div>
        </div>

        <div className={`${styles.areaStat} ${styles.verbalStat}`}>
          <div className={styles.areaIcon}>Ver</div>
          <div className={styles.areaInfo}>
            <h3>Razonamiento Verbal</h3>
            <div className={styles.areaScore}>
              {correctVerbal}/{totalVerbal} correctas
              <span className={styles.areaPercentage}>({verbalPercentage}%)</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.resultsMessage} ${
          parseFloat(percentage) >= 70 ? styles.resultsMessageGood : styles.resultsMessageNeedsImprovement
        }`}
      >
        {parseFloat(percentage) >= 70 ? (
          <p>Excelente trabajo. Has demostrado un buen dominio de los temas.</p>
        ) : (
          <p>Sigue practicando. Revisa las explicaciones de las preguntas incorrectas para mejorar.</p>
        )}
      </div>
    </>
  );
};

export default ResultsSummary;
