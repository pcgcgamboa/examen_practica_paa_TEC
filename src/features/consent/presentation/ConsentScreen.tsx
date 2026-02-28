import React, { useState } from 'react';
import styles from './ConsentScreen.module.css';

interface ConsentScreenProps {
  onAccept: () => void;
  onReject: () => void;
  userName?: string;
}

const ConsentScreen: React.FC<ConsentScreenProps> = ({ onAccept, onReject, userName }) => {
  const [hasReadFully, setHasReadFully] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const isAtBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;

    if (isAtBottom && !hasReadFully) {
      setHasReadFully(true);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="https://aplics.tec.ac.cr/SistemaCEA/Content/img/logotec_blanco.png"
            alt="TEC Logo"
            className={styles.logo}
          />
          <h2 className={styles.title}>Consentimiento Informado</h2>
          {userName && <p className={styles.user}>Usuario: {userName}</p>}
        </div>

        <div className={styles.content} onScroll={handleScroll}>
          <div className={styles.text}>
            <h3>CONSENTIMIENTO INFORMADO PARA EL USO DE DATOS EN EL SISTEMA DE PRACTICA DE PRUEBA DE ADMISION</h3>

            <p>
              El presente documento tiene como finalidad informar a las personas usuarias del Sistema de Practica de
              Prueba de Admision del Tecnologico de Costa Rica sobre el uso responsable de la informacion generada
              durante su interaccion con la plataforma.
            </p>

            <p>
              Al utilizar este sistema, la persona usuaria reconoce y autoriza de manera libre, informada y voluntaria
              al Tecnologico de Costa Rica para recopilar y utilizar la informacion derivada de su interaccion con las
              preguntas, tales como respuestas seleccionadas, tiempos de resolucion, patrones de uso y resultados
              generales de practica.
            </p>

            <p>
              Esta informacion sera utilizada exclusivamente con <strong>fines academicos, estadisticos, de mejora
              continua de la herramienta tecnologica, optimizacion de los procesos de admision y desarrollo de
              investigaciones institucionales</strong> relacionadas con la evaluacion educativa y el aprendizaje.
            </p>

            <p>
              El uso del sistema implica la aceptacion de este consentimiento informado, entendiendo que la
              participacion en la plataforma es voluntaria y que la informacion generada sera tratada bajo principios de
              <strong> confidencialidad, etica academica y proteccion de datos</strong>.
            </p>

            <p>
              El Tecnologico de Costa Rica se compromete a resguardar la informacion recolectada y a utilizarla
              unicamente dentro del marco de los fines institucionales previamente descritos, sin fines comerciales ni
              de evaluacion individual.
            </p>

            <p className={styles.finalNote}>
              Al continuar utilizando el Sistema de Practica de Prueba de Admision, la persona usuaria declara haber
              leido, comprendido y aceptado los terminos establecidos en el presente consentimiento informado.
            </p>
          </div>

          {!hasReadFully && (
            <div className={styles.scrollIndicator}>
              <span>Por favor, lea todo el documento</span>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <div className={`${styles.checkboxRow} ${hasReadFully ? styles.checkboxRowChecked : ''}`}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="consent-check"
              checked={hasReadFully}
              onChange={(event) => setHasReadFully(event.target.checked)}
            />
            <label className={styles.checkboxLabel} htmlFor="consent-check">
              He leido y comprendido el presente consentimiento informado
            </label>
          </div>

          <div className={styles.buttons}>
            <button
              className={`${styles.button} ${styles.buttonReject}`}
              onClick={onReject}
              aria-label="No acepto el consentimiento"
            >
              No Acepto
            </button>

            <button
              className={`${styles.button} ${styles.buttonAccept}`}
              onClick={() => setShowConfirmation(true)}
              disabled={!hasReadFully}
              aria-label="Acepto el consentimiento"
            >
              Acepto
            </button>
          </div>
        </div>

        {showConfirmation && (
          <div className={styles.confirmOverlay}>
            <div className={styles.confirmCard}>
              <h3>Confirmacion de Aceptacion</h3>
              <p>
                Confirma que ha leido y acepta los terminos del consentimiento informado para el uso de datos con fines
                estadisticos y de mejora del sistema.
              </p>
              <div className={styles.confirmButtons}>
                <button className={styles.confirmCancel} onClick={() => setShowConfirmation(false)}>
                  Cancelar
                </button>
                <button className={styles.confirmAccept} onClick={onAccept}>
                  Si, Confirmo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsentScreen;
