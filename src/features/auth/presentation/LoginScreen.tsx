import React from 'react';
import type { AuthenticatedUser } from '../domain/auth.types';
import { AUTH_CONFIG } from '../config/auth.config';
import { useLoginForm } from './useLoginForm';
import styles from './LoginScreen.module.css';

interface LoginScreenProps {
  onLogin: (user: AuthenticatedUser) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const {
    email,
    password,
    error,
    isLoading,
    showPassword,
    setEmail,
    setPassword,
    setShowPassword,
    handleSubmit,
  } = useLoginForm(onLogin);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sistema de Practica de Examen de Admision</h2>
          {!AUTH_CONFIG.useWebApiAuth && <div className={`${styles.modeBadge} ${styles.localBadge}`}>Modo: Autenticacion Local</div>}
          {AUTH_CONFIG.useWebApiAuth && <div className={`${styles.modeBadge} ${styles.apiBadge}`}>Modo: Web API</div>}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Correo electronico:
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="cea@itcr.ac.cr"
              disabled={isLoading}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">
              {AUTH_CONFIG.useWebApiAuth ? 'Contrasena:' : 'Codigo de acceso:'}
            </label>
            <div className={styles.passwordField}>
              <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={AUTH_CONFIG.useWebApiAuth ? 'Ingrese su contrasena' : 'Codigo de acceso'}
                disabled={isLoading}
                required
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                aria-label={showPassword ? 'Ocultar contrasena' : 'Mostrar contrasena'}
              >
                {showPassword ? 'Ver menos' : 'Ver'}
              </button>
            </div>
          </div>

          {error && (
            <div className={styles.errorMessage}>
              <span className={styles.errorIcon}>!</span>
              {error}
            </div>
          )}

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? (
              <>
                <span className={styles.spinner}></span>
                Autenticando...
              </>
            ) : (
              'Ingresar'
            )}
          </button>
        </form>

        {!AUTH_CONFIG.useWebApiAuth && (
          <div className={styles.infoCard}>
            <p>Para acceder al sistema de prueba use:</p>
            <p>
              <strong>Correo:</strong> cea@itcr.ac.cr
            </p>
            <p>
              <strong>Codigo:</strong> 123
            </p>
          </div>
        )}

        {AUTH_CONFIG.useWebApiAuth && (
          <div className={styles.infoCard}>
            <p>Ingrese sus credenciales del sistema de admision</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
