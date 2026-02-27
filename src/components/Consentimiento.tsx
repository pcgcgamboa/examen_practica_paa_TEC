// Consentimiento.tsx
import React, { useState } from 'react';

interface ConsentimientoProps {
  onAccept: () => void;
  onReject: () => void;
  userName?: string;
}

const Consentimiento: React.FC<ConsentimientoProps> = ({ 
  onAccept, 
  onReject,
  userName 
}) => {
  const [hasReadFully, setHasReadFully] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Detectar scroll hasta el final del texto
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const isAtBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
    
    if (isAtBottom && !hasReadFully) {
      setHasReadFully(true);
    }
  };

  const handleAcceptClick = () => {
    setShowConfirmation(true);
  };

  const confirmAccept = () => {
    onAccept();
  };

  const cancelConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="consentimiento-overlay">
      <div className="consentimiento-container">
        {/* Header */}
        <div className="consentimiento-header">
          <img 
            src="https://aplics.tec.ac.cr/SistemaCEA/Content/img/logotec_blanco.png" 
            alt="TEC Logo" 
            className="consentimiento-logo"
          />
          <h2>Consentimiento Informado</h2>
          {userName && <p className="consentimiento-user">Usuario: {userName}</p>}
        </div>

        {/* Contenido del consentimiento */}
        <div 
          className="consentimiento-content"
          onScroll={handleScroll}
        >
          <div className="consentimiento-text">
            <h3>
              CONSENTIMIENTO INFORMADO PARA EL USO DE DATOS EN EL SISTEMA 
              DE PRÁCTICA DE PRUEBA DE ADMISIÓN
            </h3>

            <p>
              El presente documento tiene como finalidad informar a las personas 
              usuarias del Sistema de Práctica de Prueba de Admisión del 
              Tecnológico de Costa Rica sobre el uso responsable de la información 
              generada durante su interacción con la plataforma.
            </p>

            <p>
              Al utilizar este sistema, la persona usuaria reconoce y autoriza de 
              manera libre, informada y voluntaria al Tecnológico de Costa Rica (TEC) 
              para recopilar y utilizar la información derivada de su interacción 
              con las preguntas, tales como respuestas seleccionadas, tiempos de 
              resolución, patrones de uso y resultados generales de práctica.
            </p>

            <p>
              Esta información será utilizada exclusivamente con <strong>fines académicos, 
              estadísticos, de mejora continua de la herramienta tecnológica, 
              optimización de los procesos de admisión y desarrollo de investigaciones 
              institucionales</strong> relacionadas con la evaluación educativa y el 
              aprendizaje. En ningún caso la información será empleada para realizar 
              valoraciones personales, individuales o diagnósticos personalizados 
              sobre la persona usuaria.
            </p>

            <p>
              El uso del sistema implica la aceptación de este consentimiento informado, 
              entendiendo que la participación en la plataforma es voluntaria y que la 
              información generada será tratada bajo principios de <strong>confidencialidad, 
              ética académica y protección de datos</strong>.
            </p>

            <p>
              El Tecnológico de Costa Rica se compromete a resguardar la información 
              recolectada y a utilizarla únicamente dentro del marco de los fines 
              institucionales previamente descritos, sin fines comerciales ni de 
              evaluación individual de las personas usuarias.
            </p>

            <p className="consentimiento-final">
              Al continuar utilizando el Sistema de Práctica de Prueba de Admisión, 
              la persona usuaria declara haber leído, comprendido y aceptado los 
              términos establecidos en el presente consentimiento informado.
            </p>
          </div>

          {/* Indicador de scroll */}
          {!hasReadFully && (
            <div className="scroll-indicator">
              <span>↓ Por favor, lea todo el documento ↓</span>
            </div>
          )}
        </div>

        {/* Botones de acción */}
        <div className="consentimiento-actions">
          <div className="consentimiento-checkbox">
            <input 
              type="checkbox" 
              id="consent-check"
              checked={hasReadFully}
              onChange={(e) => setHasReadFully(e.target.checked)}
            />
            <label htmlFor="consent-check">
              He leído y comprendido el presente consentimiento informado
            </label>
          </div>

          <div className="consentimiento-buttons">
            <button 
              className="consentimiento-btn btn-reject"
              onClick={onReject}
              aria-label="No acepto el consentimiento"
            >
              No Acepto
            </button>
            
            <button 
              className="consentimiento-btn btn-accept"
              onClick={handleAcceptClick}
              disabled={!hasReadFully}
              aria-label="Acepto el consentimiento"
            >
              Acepto
            </button>
          </div>
        </div>

        {/* Modal de confirmación */}
        {showConfirmation && (
          <div className="confirmation-modal-overlay">
            <div className="confirmation-modal">
              <h3>Confirmación de Aceptación</h3>
              <p>
                ¿Confirma que ha leído y acepta los términos del consentimiento 
                informado para el uso de datos con fines estadísticos y de 
                mejora del sistema?
              </p>
              <div className="confirmation-buttons">
                <button 
                  className="confirmation-btn btn-cancel"
                  onClick={cancelConfirmation}
                >
                  Cancelar
                </button>
                <button 
                  className="confirmation-btn btn-confirm"
                  onClick={confirmAccept}
                >
                  Sí, Confirmo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Consentimiento;
