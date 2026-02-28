import React from 'react';
import type { Question } from '../../domain/types/exam.types';
import MathJaxHtml from '../../../../shared/ui/MathJaxHtml/MathJaxHtml';
import QuestionProgress from './QuestionProgress';
import FormulaPanel from './FormulaPanel';
import HintPanel from './HintPanel';
import { useQuestionPanels } from '../hooks/useQuestionPanels';
import styles from '../styles/examPresentation.module.css';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  checked: boolean;
  correctAnswer: number;
  showExplanation: boolean;
  userAnswers: Array<number | null>;
  checkedQuestions: boolean[];
  allQuestions: Question[];
  onAnswerSelect: (answerIndex: number) => void;
  onCheckAnswer: () => void;
  onNavigateToQuestion: (questionIndex: number) => void;
  onHintViewed: () => void;
  onFormulasViewed: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  checked,
  correctAnswer,
  showExplanation,
  userAnswers,
  checkedQuestions,
  allQuestions,
  onAnswerSelect,
  onCheckAnswer,
  onNavigateToQuestion,
  onHintViewed,
  onFormulasViewed,
}) => {
  const { showHint, showFormulas, toggleHint, toggleFormulas } = useQuestionPanels();

  const getOptionClass = (index: number) => {
    const classNames = [styles.option];

    if (checked) {
      if (index === correctAnswer) {
        classNames.push(styles.optionCorrect);
      } else if (index === selectedAnswer && index !== correctAnswer) {
        classNames.push(styles.optionIncorrect);
      }
      classNames.push(styles.optionLocked);
    } else if (index === selectedAnswer) {
      classNames.push(styles.optionSelected);
    }

    return classNames.join(' ');
  };

  return (
    <div className={styles.questionContainer}>
      <QuestionProgress
        currentQuestionNumber={questionNumber}
        totalQuestions={totalQuestions}
        checkedQuestions={checkedQuestions}
        userAnswers={userAnswers}
        allQuestions={allQuestions}
        onNavigateToQuestion={onNavigateToQuestion}
      />

      <div className={styles.questionTitle}>{question.title}</div>

      <div className={styles.questionContent}>
        <MathJaxHtml text={question.content} />
      </div>

      <div className={styles.options}>
        {question.options.map((option, index) => (
          <div key={index} className={getOptionClass(index)} onClick={() => !checked && onAnswerSelect(index)}>
            <span className={styles.optionNumber}>{index + 1}</span>
            <MathJaxHtml text={option} />
          </div>
        ))}
      </div>

      <div className={styles.actionsContainer}>
        <div className={styles.actionsGroup}>
          {question.area === 1 && (
            <button
              className={`${styles.formulasToggleButton} ${showFormulas ? styles.buttonActive : ''}`}
              onClick={() => {
                if (!showFormulas) {
                  onFormulasViewed();
                }
                toggleFormulas();
              }}
              title="Ver Formulas y Conceptos"
            >
              Formulas
            </button>
          )}

          {question.pista && !checked && (
            <button
              className={`${styles.hintToggleButton} ${showHint ? styles.buttonActive : ''}`}
              onClick={() => {
                if (!showHint) {
                  onHintViewed();
                }
                toggleHint();
              }}
              title="Ver Pista"
            >
              Pista
            </button>
          )}
        </div>

        {!checked && selectedAnswer !== null && (
          <button className={styles.checkButton} onClick={onCheckAnswer}>
            Revisar Respuesta
          </button>
        )}
      </div>

      {question.area === 1 && (
        <FormulaPanel showFormulas={showFormulas} onToggle={toggleFormulas} />
      )}

      {question.pista && !checked && (
        <HintPanel hint={question.pista} showHint={showHint} onToggle={toggleHint} />
      )}

      {checked && (
        <div
          className={`${styles.feedbackMessage} ${
            selectedAnswer === correctAnswer ? styles.feedbackCorrect : styles.feedbackIncorrect
          }`}
        >
          {selectedAnswer === correctAnswer ? 'Respuesta Correcta' : 'Respuesta Incorrecta'}
        </div>
      )}

      {showExplanation && (
        <div className={styles.explanationBox}>
          <div className={styles.explanationTitle}>Explicacion</div>
          <MathJaxHtml text={question.explanation} />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
