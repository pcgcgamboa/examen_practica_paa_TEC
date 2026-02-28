import React from 'react';
import styles from '../styles/examPresentation.module.css';

interface ReviewNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  onBackToResults: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const ReviewNavigation: React.FC<ReviewNavigationProps> = ({
  onPrevious,
  onNext,
  onBackToResults,
  isFirst,
  isLast,
}) => {
  return (
    <div className={styles.reviewNavigation}>
      <button className={styles.reviewNavButton} onClick={onPrevious} disabled={isFirst}>
        Pregunta Anterior
      </button>

      <button className={styles.backToResultsButtonBottom} onClick={onBackToResults}>
        Ver Todos los Resultados
      </button>

      <button className={styles.reviewNavButton} onClick={onNext} disabled={isLast}>
        Pregunta Siguiente
      </button>
    </div>
  );
};

export default ReviewNavigation;
