import React, { useEffect, useState } from 'react';
import styles from './CookieConsent.module.css';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleSettings = () => {
    // For now just accept, or we could open a modal
    localStorage.setItem('cookie-consent', 'custom');
    setIsVisible(false);
  };

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>Uso de Cookies y Almacenamiento Local</h3>
          <p>
            Utilizamos almacenamiento local para guardar sus preferencias de tema y el progreso de su examen.
            Estos datos permanecen en su dispositivo y no son compartidos con terceros.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.settingsButton}`} onClick={handleSettings}>
            Configurar
          </button>
          <button className={`${styles.button} ${styles.acceptButton}`} onClick={handleAccept}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
