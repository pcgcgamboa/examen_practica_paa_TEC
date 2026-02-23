import React, { useState } from 'react';
import type { Question } from '../types';
import Header from './Header';

interface ResultsProps {
  questions: Question[];
  userAnswers: (number | null)[];
  onRestart: () => void;
  onLogout: () => void;
  onReviewQuestion: (questionIndex: number) => void; // ← NUEVO
}

const ITEMS_PER_PAGE = 10; // Número de preguntas por página

const Results: React.FC<ResultsProps> = ({
  questions,
  userAnswers,
  onRestart,
  onLogout,
  onReviewQuestion
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterArea, setFilterArea] = useState<'all' | 1 | 2>('all'); // all, math(1), verbal(2)
  const [filterStatus, setFilterStatus] = useState<'all' | 'correct' | 'incorrect'>('all');

  // Calcular estadísticas
  const totalQuestions = questions.length;
  const correctAnswers = userAnswers.filter((answer, index) => 
    answer === questions[index].correctAnswer
  ).length;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(1);

  // Estadísticas por área
  const mathQuestions = questions.filter(q => q.area === 1);
  const verbalQuestions = questions.filter(q => q.area === 2);
  
  const correctMath = userAnswers.filter((answer, index) => 
    questions[index].area === 1 && answer === questions[index].correctAnswer
  ).length;
  
  const correctVerbal = userAnswers.filter((answer, index) => 
    questions[index].area === 2 && answer === questions[index].correctAnswer
  ).length;

  const mathPercentage = mathQuestions.length > 0 
    ? ((correctMath / mathQuestions.length) * 100).toFixed(1) 
    : '0';
    
  const verbalPercentage = verbalQuestions.length > 0 
    ? ((correctVerbal / verbalQuestions.length) * 100).toFixed(1) 
    : '0';

  // Filtrar preguntas
  const filteredQuestions = questions
    .map((question, index) => ({
      ...question,
      index,
      userAnswer: userAnswers[index],
      isCorrect: userAnswers[index] === question.correctAnswer
    }))
    .filter(item => {
      // Filtrar por área
      if (filterArea !== 'all' && item.area !== filterArea) return false;
      
      // Filtrar por estado
      if (filterStatus === 'correct' && !item.isCorrect) return false;
      if (filterStatus === 'incorrect' && item.isCorrect) return false;
      
      return true;
    });

  // Paginación
  const totalPages = Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentQuestions = filteredQuestions.slice(startIndex, endIndex);

  // Cambiar página
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resetear a página 1 cuando cambian los filtros
  const handleFilterChange = (area: 'all' | 1 | 2, status: 'all' | 'correct' | 'incorrect') => {
    setFilterArea(area);
    setFilterStatus(status);
    setCurrentPage(1);
  };

  return (
    <div className="results-page">
      <Header 
        examTitle="Resultados del Examen"
        onLogout={onLogout}
        showFinishButton={false}
        showLogoutButton={true}
      />
      
      <div className="results-container">
        <div className="results-card">
          <h2>Resultados de tu Examen</h2>
          
          {/* Puntuación general */}
          <div className="score-display">
            <div className="score-main">
              <div className="score">{correctAnswers}/{totalQuestions}</div>
              <div className="percentage">{percentage}% Correctas</div>
            </div>
          </div>

          {/* Estadísticas por área */}
          <div className="stats-by-area">
            <div className="area-stat math-stat">
              <div className="area-icon">📐</div>
              <div className="area-info">
                <h3>Razonamiento Matemático</h3>
                <div className="area-score">
                  {correctMath}/{mathQuestions.length} correctas
                  <span className="area-percentage">({mathPercentage}%)</span>
                </div>
              </div>
            </div>

            <div className="area-stat verbal-stat">
              <div className="area-icon">📖</div>
              <div className="area-info">
                <h3>Razonamiento Verbal</h3>
                <div className="area-score">
                  {correctVerbal}/{verbalQuestions.length} correctas
                  <span className="area-percentage">({verbalPercentage}%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje de retroalimentación */}
          <div className={`results-message ${parseFloat(percentage) >= 70 ? 'good' : 'needs-improvement'}`}>
            {parseFloat(percentage) >= 70 ? (
              <p>¡Excelente trabajo! Has demostrado un buen dominio de los temas.</p>
            ) : (
              <p>Sigue practicando. Revisa las explicaciones de las preguntas incorrectas para mejorar.</p>
            )}
          </div>

          {/* Filtros */}
          <div className="results-filters">
            <h3>Filtrar Preguntas</h3>
            <div className="filter-group">
              <div className="filter-section">
                <label>Por Área:</label>
                <div className="filter-buttons">
                  <button 
                    className={`filter-btn ${filterArea === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('all', filterStatus)}
                  >
                    Todas ({questions.length})
                  </button>
                  <button 
                    className={`filter-btn ${filterArea === 1 ? 'active' : ''}`}
                    onClick={() => handleFilterChange(1, filterStatus)}
                  >
                    Matemáticas ({mathQuestions.length})
                  </button>
                  <button 
                    className={`filter-btn ${filterArea === 2 ? 'active' : ''}`}
                    onClick={() => handleFilterChange(2, filterStatus)}
                  >
                    Verbales ({verbalQuestions.length})
                  </button>
                </div>
              </div>

              <div className="filter-section">
                <label>Por Estado:</label>
                <div className="filter-buttons">
                  <button 
                    className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterChange(filterArea, 'all')}
                  >
                    Todas ({filteredQuestions.length})
                  </button>
                  <button 
                    className={`filter-btn ${filterStatus === 'correct' ? 'active' : ''}`}
                    onClick={() => handleFilterChange(filterArea, 'correct')}
                  >
                    Correctas ({filteredQuestions.filter(q => q.isCorrect).length})
                  </button>
                  <button 
                    className={`filter-btn ${filterStatus === 'incorrect' ? 'active' : ''}`}
                    onClick={() => handleFilterChange(filterArea, 'incorrect')}
                  >
                    Incorrectas ({filteredQuestions.filter(q => !q.isCorrect).length})
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de preguntas con paginación */}
          <div className="answers-review">
            <h3>
              Revisión de Preguntas 
              <span className="showing-info">
                (Mostrando {startIndex + 1}-{Math.min(endIndex, filteredQuestions.length)} de {filteredQuestions.length})
              </span>
            </h3>
            
            {currentQuestions.length === 0 ? (
              <div className="no-results">
                No hay preguntas que coincidan con los filtros seleccionados.
              </div>
            ) : (
              <div className="questions-list">
                {currentQuestions.map((item) => {
                  const areaName = item.area === 1 ? 'Matemático' : 'Verbal';
                  const areaClass = item.area === 1 ? 'math' : 'verbal';
                  
                  return (
                    <div key={item.index} className={`answer-item ${item.isCorrect ? 'correct' : 'incorrect'}`}>
                      <div className="answer-item-header">
                        <div className="question-number-badge">
                          Pregunta {item.index + 1}
                          <span className={`area-badge ${areaClass}`}>{areaName}</span>
                        </div>
                        <span className={`answer-status ${item.isCorrect ? 'correct' : 'incorrect'}`}>
                          {item.isCorrect ? '✓ Correcta' : '✗ Incorrecta'}
                        </span>
                      </div>
                      
                      <div className="question-title-preview">
                        {item.title}
                      </div>
                      
                      <div className="answer-details">
                        <div className="answer-detail">
                          <strong>Tu respuesta:</strong> 
                          {item.userAnswer !== null ? (
                            <span className={item.isCorrect ? 'correct-text' : 'incorrect-text'}>
                              Opción {item.userAnswer + 1}
                            </span>
                          ) : (
                            <span className="no-answer">Sin responder</span>
                          )}
                        </div>
                        
                        {!item.isCorrect && (
                          <div className="answer-detail">
                            <strong>Respuesta correcta:</strong> 
                            <span className="correct-text">Opción {item.correctAnswer + 1}</span>
                          </div>
                        )}
                      </div>

                      <button 
                        className="review-question-btn"
                        onClick={() => onReviewQuestion(item.index)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                        Ver Pregunta Completa
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="pagination-btn"
                  onClick={() => goToPage(1)}
                  disabled={currentPage === 1}
                  title="Primera página"
                >
                  ««
                </button>
                
                <button 
                  className="pagination-btn"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  title="Página anterior"
                >
                  «
                </button>

                <div className="pagination-info">
                  Página {currentPage} de {totalPages}
                </div>

                <button 
                  className="pagination-btn"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  title="Página siguiente"
                >
                  »
                </button>

                <button 
                  className="pagination-btn"
                  onClick={() => goToPage(totalPages)}
                  disabled={currentPage === totalPages}
                  title="Última página"
                >
                  »»
                </button>
              </div>
            )}
          </div>

          {/* Botones de acción */}
          <div className="results-buttons">
            <button className="restart-btn" onClick={onRestart}>
              🔄 Realizar Nuevo Examen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;