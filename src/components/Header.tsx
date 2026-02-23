import React from 'react';

interface HeaderProps {
  examTitle: string;
  onFinishExam?: () => void;
  onLogout?: () => void;
  showFinishButton: boolean;
  showLogoutButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  examTitle, 
  onFinishExam, 
  onLogout, 
  showFinishButton, 
  showLogoutButton 
}) => {
  return (
    <header className="exam-header" style={{ backgroundColor: '#004379' }}>
      <div className="header-content">
        <div className="header-left">
          <img 
            src="https://aplics.tec.ac.cr/SistemaCEA/Content/img/logotec_blanco.png" 
            alt="TEC Logo" 
            className="logo-header-image"
          />
        </div>
        <div className="header-center">
          <h1>{examTitle}</h1>
        </div>
        <div className="header-right">
          {showFinishButton && onFinishExam && (
            <button className="finish-exam-btn" onClick={onFinishExam}>
              Finalizar y Enviar
            </button>
          )}
          {showLogoutButton && onLogout && (
            <button className="logout-btn" onClick={onLogout}>
              Terminar Sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;