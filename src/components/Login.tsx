import React, { useState } from 'react';
import { authenticate, isValidEmail } from '../services/authService';
import { AUTH_CONFIG } from '../config/authConfig';
import type { oSolicitante } from '../types/apiTypes';

interface User {
  email: string;
  code?: string;
  solicitante?: oSolicitante;
}

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!email.trim()) {
      setError('Por favor ingrese su correo electrónico');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Por favor ingrese un correo electrónico válido');
      return;
    }

    if (!password.trim()) {
      setError('Por favor ingrese su contraseña o código de acceso');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Realizar autenticación
      const result = await authenticate(email, password);

      if (result.success) {
        // Login exitoso
        const user: User = {
          email,
          code: "", // pgamboa 20.2.2026, no capturar el password code: password
          solicitante: result.solicitante
        };

        onLogin(user);

        // Verificar si requiere cambio de contraseña
        if (result.requirePasswordChange) {
          console.warn('⚠️ El usuario debe cambiar su contraseña');
          // Aquí podrías redirigir a una página de cambio de contraseña
        }
      } else {
        // Login fallido
        setError(result.message);
      }
    } catch (error) {
      console.error('Error inesperado en el login:', error);
      setError('Ha ocurrido un error inesperado. Por favor intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Sistema de Práctica de Examen de Admisión</h2>
          {!AUTH_CONFIG.useWebApiAuth && (
            <div className="auth-mode-badge local">
              Modo: Autenticación Local
            </div>
          )}
          {AUTH_CONFIG.useWebApiAuth && (
            <div className="auth-mode-badge api">
              Modo: Web API
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="cea@itcr.ac.cr"
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              {AUTH_CONFIG.useWebApiAuth ? 'Contraseña:' : 'Código de acceso:'}
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={AUTH_CONFIG.useWebApiAuth ? 'Ingrese su contraseña' : 'Código de acceso'}
                disabled={isLoading}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Autenticando...
              </>
            ) : (
              'Ingresar'
            )}
          </button>
        </form>

        {!AUTH_CONFIG.useWebApiAuth && (
          <div className="login-info">
            <p>Para acceder al sistema de prueba use:</p>
            <p><strong>Correo:</strong> cea@itcr.ac.cr</p>
            <p><strong>Código:</strong> 123</p>
          </div>
        )}

        {AUTH_CONFIG.useWebApiAuth && (
          <div className="login-info">
            <p>Ingrese sus credenciales del sistema de admisión</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
