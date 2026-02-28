import React from 'react';
import styles from './ConsentRejectedScreen.module.css';

interface ConsentRejectedScreenProps {
  onGoBack: () => void;
  pdfUrl: string;
}

const ConsentRejectedScreen: React.FC<ConsentRejectedScreenProps> = ({ onGoBack, pdfUrl }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="https://aplics.tec.ac.cr/SistemaCEA/Content/img/logotec_blanco.png"
            alt="TEC Logo"
            className={styles.logo}
          />
          <h2>Acceso al Cuaderno de Practica</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.icon}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>

          <h3 className={styles.title}>Gracias por su interes</h3>

          <p className={styles.message}>
            Entendemos y respetamos su decision de no autorizar el uso de datos con fines estadisticos.
          </p>

          <div className={styles.infoBox}>
            <p>
              Como alternativa, puede acceder al <strong>Cuaderno de Practica en formato PDF</strong>, el cual
              contiene preguntas de ejemplo para su preparacion.
            </p>

            <p>Este documento le permitira practicar de forma independiente sin necesidad de utilizar el sistema en linea.</p>
          </div>

          <div className={styles.benefitsBox}>
            <h4>El Cuaderno de Practica incluye:</h4>
            <ul className={styles.benefitsList}>
              <li>Preguntas de ejemplo de ambas areas</li>
              <li>Respuestas correctas y explicaciones detalladas</li>
              <li>Formato descargable para practica offline</li>
              <li>Material de referencia para el examen de admision</li>
            </ul>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.button} onClick={onGoBack} aria-label="Volver al inicio">
            Volver al Inicio
          </button>

          <a
            href={pdfUrl}
            download="Cuaderno_Practica_TEC.pdf"
            className={styles.linkButton}
            aria-label="Descargar cuaderno de practica"
          >
            Descargar Cuaderno PDF
          </a>
        </div>

        <div className={styles.footer}>
          <p>Si cambia de opinion y desea utilizar el sistema en linea, puede cerrar sesion e iniciar de nuevo.</p>
        </div>
      </div>
    </div>
  );
};

export default ConsentRejectedScreen;
