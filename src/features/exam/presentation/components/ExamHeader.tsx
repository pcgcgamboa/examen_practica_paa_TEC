import React from 'react';
import { useTheme } from '../../../../shared/providers/ThemeProvider';
import styles from '../styles/examPresentation.module.css';

interface ExamHeaderProps {
  examTitle: string;
  onFinishExam?: () => void;
  onLogout?: () => void;
  showFinishButton: boolean;
  showLogoutButton: boolean;
}

const ExamHeader: React.FC<ExamHeaderProps> = ({
  examTitle,
  onFinishExam,
  onLogout,
  showFinishButton,
  showLogoutButton,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerBrand}>
          <img
            src="https://aplics.tec.ac.cr/SistemaCEA/Content/img/logotec_blanco.png"
            alt="TEC Logo"
            className={styles.headerLogo}
          />
        </div>
        <div className={styles.headerTitleArea}>
          <h1 className={styles.headerTitle}>{examTitle}</h1>
        </div>
        <div className={styles.headerActions}>
          <button 
            className={styles.themeToggleButton} 
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          {showFinishButton && onFinishExam && (
            <button className={styles.finishButton} onClick={onFinishExam}>
              Finalizar y Enviar
            </button>
          )}
          {showLogoutButton && onLogout && (
            <button className={styles.logoutButton} onClick={onLogout}>
              Terminar Sesion
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default ExamHeader;
