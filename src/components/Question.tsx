import React, { useState, useEffect, useRef } from 'react';
import type { Question as QuestionType } from '../types';
import MathJaxText from './MathJaxText';

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  checked: boolean;
  correctAnswer: number;
  onAnswerSelect: (answerIndex: number) => void;
  onCheckAnswer: () => void;
  showExplanation: boolean;
  userAnswers: (number | null)[];
  checkedQuestions: boolean[];
  onNavigateToQuestion: (questionIndex: number) => void;
  allQuestions: QuestionType[];  // ← NUEVO
}

const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  checked,
  correctAnswer,
  onAnswerSelect,
  onCheckAnswer,
  showExplanation,
  userAnswers,
  checkedQuestions,
  onNavigateToQuestion,
  allQuestions  // ← NUEVO
}) => {
  const [showHint, setShowHint] = useState(false);
  const [showFormulas, setShowFormulas] = useState(false); // NUEVO: Estado para fórmulas
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowHint(false);
  }, [questionNumber]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const barWidth = rect.width;
    
    const clickPercentage = clickX / barWidth;
    const targetQuestionIndex = Math.floor(clickPercentage * totalQuestions);
    const validIndex = Math.max(0, Math.min(totalQuestions - 1, targetQuestionIndex));
    
    onNavigateToQuestion(validIndex);
  };

  const getOptionClass = (index: number) => {
    let className = 'option';
    
    if (checked) {
      if (index === correctAnswer) {
        className += ' correct';
      } else if (index === selectedAnswer && index !== correctAnswer) {
        className += ' incorrect';
      }
    } else if (index === selectedAnswer) {
      className += ' selected';
    }
    
    if (checked) {
      className += ' locked';
    }
    
    return className;
  };

  // Reemplazar la función renderSplitSegments con esta versión mejorada:
const renderSplitSegments = () => {
  return Array.from({ length: totalQuestions }, (_, index) => {
    const isCurrent = index === questionNumber - 1;
    const isChecked = checkedQuestions[index];
    const isAnswered = userAnswers[index] !== null;
    const questionArea = allQuestions[index].area;

    let statusClass = 'segment-status';
    let statusName = '';
    if (isCurrent) {
      statusClass += ' status-current';
      statusName = 'Actual';
    } else if (isChecked) {
      statusClass += ' status-checked';
      statusName = 'Chequeada';
    } else if (isAnswered) {
      statusClass += ' status-answered';
      statusName = 'Respondida';
    } else {
      statusClass += ' status-unanswered';
      statusName = 'Sin responder';
    }
    
    const areaClass = questionArea === 1 ? 'segment-area area-math' : 'segment-area area-verbal';
    const areaName = questionArea === 1 ? 'Matemático' : 'Verbal';
    
    return (
      <div
        key={index}
        className={`progress-segment-split ${isCurrent ? 'is-current' : ''}`}
        style={{ width: `${100 / totalQuestions}%` }}
        onClick={() => onNavigateToQuestion(index)}
        title={`Pregunta ${index + 1} - ${areaName} - ${statusName}`}
      >
        <div className={areaClass}></div>
        <div className={statusClass}></div>
      </div>
    );
  });
};

  return (
    <div className="question-container">
      <div className="question-header">
        <h3>Pregunta {questionNumber} de {totalQuestions}</h3>
        
        <div 
          ref={progressBarRef}
          className="progress-bar-split"
          onClick={handleProgressClick}
        >
          <div className="progress-segments-split">
            {renderSplitSegments()}
          </div>
          
          <div 
            className="progress-indicator-split"
            style={{ left: `${((questionNumber - 0.5) / totalQuestions) * 100}%` }}
          >
            <div className="indicator-arrow"></div>
            <div className="indicator-label-split">{questionNumber}</div>
          </div>
        </div>
        
        <div className="progress-legend-split">
          <div className="legend-group">
            <span className="legend-label">Estado:</span>
            <span className="legend-item">
              <span className="legend-box status-checked"></span> Chequeada
            </span>
            <span className="legend-item">
              <span className="legend-box status-answered"></span> Respondida
            </span>
            <span className="legend-item">
              <span className="legend-box status-current"></span> Actual
            </span>
            <span className="legend-item">
              <span className="legend-box status-unanswered"></span> Sin responder
            </span>
          </div>
          
          <span className="legend-divider">|</span>
          
          <div className="legend-group">
            <span className="legend-label">Área:</span>
            <span className="legend-item">
              <span className="legend-box area-math"></span> Matemático
            </span>
            <span className="legend-item">
              <span className="legend-box area-verbal"></span> Verbal
            </span>
          </div>
        </div>
      </div>
      
      <div className="question-title">{question.title}</div>
      
      <div className="question-content">
        <MathJaxText text={question.content} />
      </div>
      
      <div className="options">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={getOptionClass(index)}
            onClick={() => !checked && onAnswerSelect(index)}
          >
            <span className="option-number">{index + 1}</span>
            <MathJaxText text={option} />
          </div>
        ))}
      </div>

      {/* NUEVO: Botón de Fórmulas y Conceptos - Solo para área matemática (area === 1) */}
      {question.area === 1 && (
        <div className="formulas-container">
          <button 
            className="formulas-toggle-btn"
            onClick={() => setShowFormulas(!showFormulas)}
            aria-label={showFormulas ? "Ocultar fórmulas" : "Ver fórmulas y conceptos"}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
              <line x1="9" y1="11" x2="15" y2="11"/>
            </svg>
            <span>{showFormulas ? 'Ocultar Fórmulas y Conceptos' : 'Ver Fórmulas y Conceptos Básicos'}</span>
          </button>
          
          {showFormulas && (
            <div className="formulas-box">
              <div className="formulas-title">📐 Fórmulas y Conceptos Básicos</div>
              <div className="formulas-intro">
                <p>Seguidamente, encontrará una serie de relaciones matemáticas básicas y fórmulas que podrá consultar durante la prueba.</p>
              </div>
              
              <div className="formulas-content">
                <ol className="formulas-list">
                  <li>
                    Un número primo es un número natural mayor que 1 que tiene solamente dos divisores positivos diferentes: la unidad y el mismo número.
                  </li>
                  
                  <li>
                    Dos ángulos opuestos por el vértice son congruentes (de igual medida).
                  </li>
                  
                  <li>
                    Bisecar se define como dividir un objeto geométrico en dos partes congruentes.
                  </li>
                  
                  <li>
                    En un triángulo isósceles:
                    <ol type="a" className="sub-list">
                      <li>Dos lados son congruentes (de igual medida).</li>
                      <li>A lados congruentes se oponen ángulos congruentes y viceversa.</li>
                    </ol>
                  </li>
                  
                  <li>
                    En un triángulo equilátero:
                    <ol type="a" className="sub-list">
                      <li>Los tres lados son congruentes.</li>
                      <li>Los tres ángulos internos son congruentes.</li>
                    </ol>
                  </li>
                  
                  <li>
                    <strong>Figuras de dos dimensiones:</strong>
                    <div className="formulas-table-container">
                      <table className="formulas-table">
                        <thead>
                          <tr>
                            <th>Figura</th>
                            <th>Perímetro</th>
                            <th>Área</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><MathJaxText text="Circunferencia" /></td>
                            <td><MathJaxText text="$P = 2\pi r$" /></td>
                            <td><MathJaxText text="$A = \pi r^2$" /></td>
                          </tr>
                          <tr>
                            <td><MathJaxText text="Rectángulo de dimensiones $l$ y $a$" /></td>
                            <td><MathJaxText text="$P = 2l + 2a$" /></td>
                            <td><MathJaxText text="$A = la$" /></td>
                          </tr>
                          <tr>
                            <td><MathJaxText text="Cuadrado de lado $l$" /></td>
                            <td><MathJaxText text="$P = 4l$" /></td>
                            <td><MathJaxText text="$A = l^{2}$" /></td>
                          </tr>
                          <tr>
                            <td><MathJaxText text="Triángulo de lados $a,b$ y $c$ y altura $h$ sobre la base $b$" /></td>
                            <td><MathJaxText text="$P = a + b + c$" /></td>
                            <td><MathJaxText text="$A = \frac{bh}{2}$" /></td>
                          </tr>
                          <tr>
                            <td><MathJaxText text="Triángulo equilátero de lado $l$" /></td>
                            <td><MathJaxText text="$P = 3l$" /></td>
                            <td><MathJaxText text="$A = \frac{l^2 \sqrt{3}}{4}$" /></td>
                          </tr>
                          <tr>
                            <td><MathJaxText text="Hexágono regular de lado $l$" /></td>
                            <td><MathJaxText text="$P = 6l$" /></td>
                            <td><MathJaxText text="$A = \frac{3l^{2}\sqrt{3}}{2}$" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  
                  <li>
                    <strong>Figuras de tres dimensiones:</strong>
                    <div className="formulas-table-container">
                      <table className="formulas-table">
                        <thead>
                          <tr>
                            <th>Figura</th>
                            <th>Área total</th>
                            <th>Volumen</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><MathJaxText text="Cubo de arista $a$" /></td>
                            <td><MathJaxText text="$A = 6a^{2}$" /></td>
                            <td><MathJaxText text="$V = a^{3}$" /></td>
                          </tr>
                          <tr>
                            <td><MathJaxText text="Esfera de radio $r$" /></td>
                            <td><MathJaxText text="$A = 4\pi r^{2}$" /></td>
                            <td><MathJaxText text="$V = \frac{4}{3}\pi r^{3}$" /></td>
                          </tr>
                          <tr>
                            <td><MathJaxText text="Cilindro de radio $r$ y altura $h$" /></td>
                            <td><MathJaxText text="$A = 2\pi rh + 2\pi r^{2}$" /></td>
                            <td><MathJaxText text="$V = \pi r^{2}h$" /></td>
                          </tr>
                          <tr>
                            <td><MathJaxText text="Cono de radio $r$, altura $h$ y generatriz $g$" /></td>
                            <td><MathJaxText text="$A = \pi rg + \pi r^{2}$" /></td>
                            <td><MathJaxText text="$V = \frac{\pi r^{2}h}{3}$" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      )}

      {question.pista && !checked && (
        <div className="hint-container">
          <button 
            className="hint-toggle-btn"
            onClick={() => setShowHint(!showHint)}
            aria-label={showHint ? "Ocultar pista" : "Ver pista"}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span>{showHint ? 'Ocultar pista' : 'Ver pista'}</span>
          </button>
          
          {showHint && (
            <div className="hint-box">
              <div className="hint-title">💡 Pista</div>
              <MathJaxText text={question.pista} />
            </div>
          )}
        </div>
      )}

      {!checked && selectedAnswer !== null && (
        <div className="check-button-container">
          <button className="check-btn" onClick={onCheckAnswer}>
            Revisar Respuesta
          </button>
        </div>
      )}

      {checked && (
        <div className={`feedback-message ${selectedAnswer === correctAnswer ? 'correct-feedback' : 'incorrect-feedback'}`}>
          {selectedAnswer === correctAnswer 
            ? '✓ Respuesta Correcta' 
            : '✗ Respuesta Incorrecta'
          }
        </div>
      )}
      
      {showExplanation && (
        <div className="explanation-box">
          <div className="explanation-title">Explicación</div>
          <MathJaxText text={question.explanation} />
        </div>
      )}
    </div>
  );
};

export default Question;