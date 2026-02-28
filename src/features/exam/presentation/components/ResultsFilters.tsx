import React from 'react';
import styles from '../styles/examPresentation.module.css';

interface ResultsFiltersProps {
  filterArea: 'all' | 1 | 2;
  filterStatus: 'all' | 'correct' | 'incorrect';
  totalQuestions: number;
  mathQuestions: number;
  verbalQuestions: number;
  filteredQuestions: number;
  filteredCorrect: number;
  filteredIncorrect: number;
  onChange: (area: 'all' | 1 | 2, status: 'all' | 'correct' | 'incorrect') => void;
}

const ResultsFilters: React.FC<ResultsFiltersProps> = ({
  filterArea,
  filterStatus,
  totalQuestions,
  mathQuestions,
  verbalQuestions,
  filteredQuestions,
  filteredCorrect,
  filteredIncorrect,
  onChange,
}) => {
  return (
    <div className={styles.resultsFilters}>
      <h3>Filtrar Preguntas</h3>
      <div className={styles.filterGroup}>
        <div className={styles.filterSection}>
          <label>Por Area:</label>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${filterArea === 'all' ? styles.filterButtonActive : ''}`}
              onClick={() => onChange('all', filterStatus)}
            >
              Todas ({totalQuestions})
            </button>
            <button
              className={`${styles.filterButton} ${filterArea === 1 ? styles.filterButtonActive : ''}`}
              onClick={() => onChange(1, filterStatus)}
            >
              Matematicas ({mathQuestions})
            </button>
            <button
              className={`${styles.filterButton} ${filterArea === 2 ? styles.filterButtonActive : ''}`}
              onClick={() => onChange(2, filterStatus)}
            >
              Verbales ({verbalQuestions})
            </button>
          </div>
        </div>

        <div className={styles.filterSection}>
          <label>Por Estado:</label>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${filterStatus === 'all' ? styles.filterButtonActive : ''}`}
              onClick={() => onChange(filterArea, 'all')}
            >
              Todas ({filteredQuestions})
            </button>
            <button
              className={`${styles.filterButton} ${filterStatus === 'correct' ? styles.filterButtonActive : ''}`}
              onClick={() => onChange(filterArea, 'correct')}
            >
              Correctas ({filteredCorrect})
            </button>
            <button
              className={`${styles.filterButton} ${filterStatus === 'incorrect' ? styles.filterButtonActive : ''}`}
              onClick={() => onChange(filterArea, 'incorrect')}
            >
              Incorrectas ({filteredIncorrect})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsFilters;
