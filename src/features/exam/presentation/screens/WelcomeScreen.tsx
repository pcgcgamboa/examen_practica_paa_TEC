import React, { useState } from 'react';
import type { Question } from '../../domain/types/exam.types';
import styles from '../styles/examPresentation.module.css';

interface WelcomeScreenProps {
  userEmail?: string;
  questions: Question[];
  onContinue: () => void;
  onLogout: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ userEmail, questions, onContinue, onLogout }) => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <div className={styles.welcomePageWrapper}>
      <div className={styles.welcomePageScroll}>
        <div className={styles.welcomeHeaderBar}>
          <div className={styles.welcomeHeaderContent}>
            <div className={styles.tecLogoHeader}>
              <img
                src="https://aplics.tec.ac.cr/SistemaCEA/Content/img/logotec_blanco.png"
                alt="TEC Logo"
                className={styles.logoHeaderImage}
              />
            </div>
            <div className={styles.headerUserInfo}>
              <span className={styles.userEmail}>{userEmail}</span>
              <button className={styles.logoutHeaderButton} onClick={onLogout}>
                Cerrar Sesion
              </button>
            </div>
          </div>
        </div>

        <div className={styles.welcomeMainContent}>
          <div className={styles.welcomeHero}>
            <h1 className={styles.welcomeMainTitle}>Cuaderno Digital de Ejercicios</h1>
            <h2 className={styles.welcomeMainSubtitle}>Prueba de Aptitud Academica (PAA)</h2>
            <p className={styles.welcomeInstitution}>Instituto Tecnologico de Costa Rica</p>
          </div>

          <div className={styles.welcomeSection}>
            <h3 className={styles.sectionTitle}>Presentacion</h3>

            <div className={styles.presentationContent}>
              <p>
                Las personas interesadas en iniciar sus estudios superiores en el <strong>Instituto Tecnologico de
                Costa Rica</strong> deben realizar la prueba de aptitud academica. El resultado de este examen se
                combina con el promedio de la educacion diversificada para calcular el puntaje de admision.
              </p>

              <p>
                La prueba esta compuesta por <strong>44 items de matematica</strong> y <strong>26 de verbal</strong>,
                los cuales miden diferentes habilidades de razonamiento matematico y verbal.
              </p>

              <div className={`${styles.highlightBox} ${styles.mathHighlight}`}>
                <h4>Habilidades de Razonamiento Matematico</h4>
                <p>
                  En general, las habilidades de razonamiento matematico involucran la resolucion de problemas con el
                  uso de diversas estrategias cognitivas.
                </p>
              </div>

              <div className={`${styles.highlightBox} ${styles.verbalHighlight}`}>
                <h4>Habilidades de Razonamiento Verbal</h4>
                <p>
                  En las habilidades de razonamiento verbal se mide la capacidad para utilizar el lenguaje verbal a
                  traves del analisis semantico e inferencial.
                </p>
              </div>

              <p className={styles.presentationConclusion}>
                En este cuaderno encontrara ejercicios resueltos de las diferentes categorias de razonamiento, con la
                finalidad de ejemplificar posibles estrategias de resolucion.
              </p>
            </div>
          </div>

          <div className={styles.welcomeSection}>
            <h3 className={styles.sectionTitle}>Informacion de la Practica</h3>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>{questions.length}</div>
                <div className={styles.statLabel}>Total de Preguntas</div>
                <div className={styles.statBreakdown}>
                  <span>{questions.filter((question) => question.area === 1).length} Matematica</span>
                  <span className={styles.divider}>-</span>
                  <span>{questions.filter((question) => question.area === 2).length} Verbal</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statNumber}>2.5</div>
                <div className={styles.statLabel}>Horas de Practica</div>
                <div className={styles.statBreakdown}>
                  <span>Tiempo cronometrado</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statNumber}>3</div>
                <div className={styles.statLabel}>Niveles de Dificultad</div>
                <div className={styles.statBreakdown}>
                  <span>Facil - Intermedio - Dificil</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.welcomeActions}>
            <button className={styles.mainActionButton} onClick={onContinue}>
              <span>Continuar a las Instrucciones</span>
              <span className={styles.buttonArrow}>-&gt;</span>
            </button>

            <button className={styles.secondaryActionButton} onClick={() => setShowCredits((value) => !value)}>
              {showCredits ? 'Ocultar Creditos' : 'Ver Creditos'}
            </button>
          </div>

          {showCredits && (
            <div>
              <div className={styles.creditsCard}>
                <h3 className={styles.creditsTitle}>Creditos</h3>
                <div className={styles.creditsContent}>
                  <div className={styles.creditsGroup}>
                    <h4>Comite Examen de Admision</h4>
                    <p className={styles.creditsDescription}>
                      Responsable de la construccion y aplicacion de la Prueba de Aptitud Academica del TEC.
                    </p>
                  </div>
                  <div className={styles.creditsGroup}>
                    <h4>Instituto Tecnologico de Costa Rica</h4>
                    <p className={styles.creditsDescription}>
                      Institucion de educacion superior publica costarricense comprometida con la excelencia academica.
                    </p>
                  </div>
                  <div className={styles.creditsEdition}>
                    <strong>Cuarta Edicion - {new Date().getFullYear()}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <footer className={styles.welcomeFooter}>
          <p>Instituto Tecnologico de Costa Rica - Comite Examen de Admision</p>
          <p>Cuaderno Digital de Ejercicios</p>
        </footer>
      </div>
    </div>
  );
};

export default WelcomeScreen;
