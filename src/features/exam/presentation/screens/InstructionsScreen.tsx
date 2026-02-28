import React from 'react';
import type { Question } from '../../domain/types/exam.types';
import ExamHeader from '../components/ExamHeader';
import styles from '../styles/examPresentation.module.css';

interface InstructionsScreenProps {
  userEmail?: string;
  questions: Question[];
  onStartExam: () => void;
  onLogout: () => void;
}

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ userEmail, questions, onStartExam, onLogout }) => {
  return (
    <div className={styles.examStartPage}>
      <ExamHeader examTitle="Practica de Examen de Admision" onLogout={onLogout} showFinishButton={false} showLogoutButton={true} />
      <div className={styles.examStartContainer}>
        <div className={styles.examInstructions}>
          <h2>Practica de Examen de Admision</h2>
          <p className={styles.examIntroText}>Bienvenido, {userEmail}</p>

          <div className={styles.instructionsList}>
            <h3>Instrucciones:</h3>
            <ul>
              <li>El examen tiene una duracion de 2 horas y 30 minutos.</li>
              <li>
                Consta de {questions.length} preguntas ({questions.filter((question) => question.area === 1).length} matematicas y{' '}
                {questions.filter((question) => question.area === 2).length} verbales).
              </li>
              <li>Selecciona una respuesta y presiona Revisar Respuesta para validar.</li>
              <li>Una vez chequeada una pregunta, no podras cambiar tu respuesta.</li>
              <li>Puedes navegar entre preguntas usando los botones anterior y siguiente.</li>
              <li>Al finalizar podras ver tus resultados y las explicaciones.</li>
            </ul>
          </div>

          <div className={styles.timerInfo}>
            <h3>Tiempo disponible: 2 horas y 30 minutos</h3>
          </div>

          <button className={styles.startExamButton} onClick={onStartExam}>
            Iniciar Examen
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsScreen;
