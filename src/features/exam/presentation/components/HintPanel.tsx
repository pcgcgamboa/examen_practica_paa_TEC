import React from 'react';
import MathJaxHtml from '../../../../shared/ui/MathJaxHtml/MathJaxHtml';
import styles from '../styles/examPresentation.module.css';

interface HintPanelProps {
  hint: string;
  showHint: boolean;
  onToggle: () => void;
}

const HintPanel: React.FC<HintPanelProps> = ({ hint, showHint, onToggle }) => {
  if (!hint || !showHint) {
    return null;
  }

  return (
    <div className={styles.hintBox}>
      <div className={styles.hintTitle}>
        Pista
        <button className={styles.closePanelButton} onClick={onToggle} aria-label="Cerrar pista">
          ×
        </button>
      </div>
      <MathJaxHtml text={hint} />
    </div>
  );
};

export default HintPanel;
