import React, { useState } from 'react';
import type { Question } from '../../domain/types/exam.types';
import ExamHeader from '../components/ExamHeader';
import ResultsFilters from '../components/ResultsFilters';
import ResultsSummary from '../components/ResultsSummary';
import styles from '../styles/examPresentation.module.css';

interface ResultsScreenProps {
  questions: Question[];
  userAnswers: Array<number | null>;
  onRestart: () => void;
  onLogout: () => void;
  onReviewQuestion: (questionIndex: number) => void;
}

const ITEMS_PER_PAGE = 10;

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  questions,
  userAnswers,
  onRestart,
  onLogout,
  onReviewQuestion,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterArea, setFilterArea] = useState<'all' | 1 | 2>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'correct' | 'incorrect'>('all');

  const totalQuestions = questions.length;
  const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(1);
  const mathQuestions = questions.filter((question) => question.area === 1);
  const verbalQuestions = questions.filter((question) => question.area === 2);
  const correctMath = userAnswers.filter((answer, index) => questions[index].area === 1 && answer === questions[index].correctAnswer).length;
  const correctVerbal = userAnswers.filter((answer, index) => questions[index].area === 2 && answer === questions[index].correctAnswer).length;
  const mathPercentage = mathQuestions.length > 0 ? ((correctMath / mathQuestions.length) * 100).toFixed(1) : '0';
  const verbalPercentage = verbalQuestions.length > 0 ? ((correctVerbal / verbalQuestions.length) * 100).toFixed(1) : '0';

  const filteredQuestions = questions
    .map((question, index) => ({
      ...question,
      index,
      userAnswer: userAnswers[index],
      isCorrect: userAnswers[index] === question.correctAnswer,
    }))
    .filter((item) => {
      if (filterArea !== 'all' && item.area !== filterArea) {
        return false;
      }
      if (filterStatus === 'correct' && !item.isCorrect) {
        return false;
      }
      if (filterStatus === 'incorrect' && item.isCorrect) {
        return false;
      }
      return true;
    });

  const totalPages = Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentQuestions = filteredQuestions.slice(startIndex, endIndex);

  const handleFilterChange = (area: 'all' | 1 | 2, status: 'all' | 'correct' | 'incorrect') => {
    setFilterArea(area);
    setFilterStatus(status);
    setCurrentPage(1);
  };

  return (
    <div className={styles.resultsPage}>
      <ExamHeader examTitle="Resultados del Examen" onLogout={onLogout} showFinishButton={false} showLogoutButton={true} />

      <div className={styles.resultsContainer}>
        <div className={styles.resultsCard}>
          <h2 className={styles.resultsTitle}>Resultados de tu Examen</h2>

          <ResultsSummary
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            percentage={percentage}
            correctMath={correctMath}
            totalMath={mathQuestions.length}
            mathPercentage={mathPercentage}
            correctVerbal={correctVerbal}
            totalVerbal={verbalQuestions.length}
            verbalPercentage={verbalPercentage}
          />

          <ResultsFilters
            filterArea={filterArea}
            filterStatus={filterStatus}
            totalQuestions={questions.length}
            mathQuestions={mathQuestions.length}
            verbalQuestions={verbalQuestions.length}
            filteredQuestions={filteredQuestions.length}
            filteredCorrect={filteredQuestions.filter((question) => question.isCorrect).length}
            filteredIncorrect={filteredQuestions.filter((question) => !question.isCorrect).length}
            onChange={handleFilterChange}
          />

          <div className={styles.answersReview}>
            <h3>
              Revision de Preguntas
              <span className={styles.showingInfo}>
                (Mostrando {startIndex + 1}-{Math.min(endIndex, filteredQuestions.length)} de {filteredQuestions.length})
              </span>
            </h3>

            {currentQuestions.length === 0 ? (
              <div className={styles.noResults}>No hay preguntas que coincidan con los filtros seleccionados.</div>
            ) : (
              <div className={styles.questionsList}>
                {currentQuestions.map((item) => {
                  const areaName = item.area === 1 ? 'Matematico' : 'Verbal';
                  const areaClass = item.area === 1 ? styles.areaBadgeMath : styles.areaBadgeVerbal;

                  return (
                    <div
                      key={item.index}
                      className={`${styles.answerItem} ${item.isCorrect ? styles.answerItemCorrect : styles.answerItemIncorrect}`}
                    >
                      <div className={styles.answerItemHeader}>
                        <div className={styles.questionNumberBadge}>
                          Pregunta {item.index + 1}
                          <span className={`${styles.areaBadge} ${areaClass}`}>{areaName}</span>
                        </div>
                        <span
                          className={`${styles.answerStatus} ${
                            item.isCorrect ? styles.answerStatusCorrect : styles.answerStatusIncorrect
                          }`}
                        >
                          {item.isCorrect ? 'Correcta' : 'Incorrecta'}
                        </span>
                      </div>

                      <div className={styles.questionTitlePreview}>{item.title}</div>

                      <div className={styles.answerDetails}>
                        <div className={styles.answerDetail}>
                          <strong>Tu respuesta:</strong>{' '}
                          {item.userAnswer !== null ? (
                            <span className={item.isCorrect ? styles.correctText : styles.incorrectText}>Opcion {item.userAnswer + 1}</span>
                          ) : (
                            <span className={styles.noAnswerText}>Sin responder</span>
                          )}
                        </div>

                        {!item.isCorrect && (
                          <div className={styles.answerDetail}>
                            <strong>Respuesta correcta:</strong> <span className={styles.correctText}>Opcion {item.correctAnswer + 1}</span>
                          </div>
                        )}
                      </div>

                      <button className={styles.reviewQuestionButton} onClick={() => onReviewQuestion(item.index)}>
                        Ver Pregunta Completa
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button className={styles.paginationButton} onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                  &lt;&lt;
                </button>
                <button className={styles.paginationButton} onClick={() => setCurrentPage((page) => page - 1)} disabled={currentPage === 1}>
                  &lt;
                </button>
                <div className={styles.paginationInfo}>
                  Pagina {currentPage} de {totalPages}
                </div>
                <button
                  className={styles.paginationButton}
                  onClick={() => setCurrentPage((page) => page + 1)}
                  disabled={currentPage === totalPages}
                >
                  &gt;
                </button>
                <button className={styles.paginationButton} onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
                  &gt;&gt;
                </button>
              </div>
            )}
          </div>

          <div className={styles.resultsButtons}>
            <button className={styles.restartButton} onClick={onRestart}>
              Realizar Nuevo Examen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
