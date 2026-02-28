import React from 'react';
import { useExamTimer } from '../../application/hooks/useExamTimer';
import styles from '../styles/examPresentation.module.css';

interface ExamTimerProps {
  initialTime: number;
  isRunning: boolean;
  onTimeUp: () => void;
}

const ExamTimer: React.FC<ExamTimerProps> = ({ initialTime, isRunning, onTimeUp }) => {
  const timeRemaining = useExamTimer(initialTime, isRunning, onTimeUp);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;

  return (
    <div className={styles.timerContainer}>
      <div className={`${styles.timer} ${timeRemaining < 300 ? styles.timerWarning : ''}`}>{formattedTime}</div>
    </div>
  );
};

export default ExamTimer;
