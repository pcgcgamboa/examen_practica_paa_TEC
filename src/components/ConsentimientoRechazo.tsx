// ConsentimientoRechazo.tsx
import React from 'react';

interface ConsentimientoRechazoProps {
  onGoBack: () => void;
  pdfUrl?: string;
}

const ConsentimientoRechazo: React.FC<ConsentimientoRechazoProps> = ({ 
  onGoBack,
  pdfUrl = '/cuaderno-practica.pdf' // URL por defecto del PDF
}) => {
  return (
    <div className="rechazo-overlay">
      <div className="rechazo-container">
        {/* Header */}
        <div className="rechazo-header">
          <img 
            src="https://aplics.tec.ac.cr/SistemaCEA/Content/img/logotec_blanco.png" 
            alt="TEC Logo" 
            className="rechazo-logo"
          />
          <h2>Acceso al Cuaderno de Práctica</h2>
        </div>

        {/* Contenido */}
        <div className="rechazo-content">
          <div className="rechazo-icon">
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>

          <h3>Gracias por su interés</h3>
          
          <p className="rechazo-message">
            Entendemos y respetamos su decisión de no autorizar el uso de datos 
            con fines estadísticos.
          </p>

          <div className="rechazo-info">
            <p>
              Como alternativa, puede acceder al <strong>Cuaderno de Práctica 
              en formato PDF</strong>, el cual contiene preguntas de ejemplo 
              para su preparación.
            </p>
            
            <p>
              Este documento le permitirá practicar de forma independiente sin 
              necesidad de utilizar el sistema en línea.
            </p>
          </div>

          <div className="rechazo-benefits">
            <h4>El Cuaderno de Práctica incluye:</h4>
            <ul>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Preguntas de ejemplo de ambas áreas (Matemáticas y Verbal)
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Respuestas correctas y explicaciones detalladas
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Formato descargable para práctica offline
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Material de referencia para el examen de admisión
              </li>
            </ul>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="rechazo-actions">
          <button 
            className="rechazo-btn btn-secondary"
            onClick={onGoBack}
            aria-label="Volver al inicio"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Volver al Inicio
          </button>
          
          <a 
            href={pdfUrl}
            download="Cuaderno_Practica_TEC.pdf"
            className="rechazo-btn btn-primary"
            aria-label="Descargar cuaderno de práctica"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Descargar Cuaderno PDF
          </a>
        </div>

        {/* Información adicional */}
        <div className="rechazo-footer">
          <p>
            Si cambia de opinión y desea utilizar el sistema en línea, 
            puede cerrar sesión y volver a iniciar sesión para aceptar 
            el consentimiento informado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsentimientoRechazo;
