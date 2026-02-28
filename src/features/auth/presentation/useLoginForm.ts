import type { FormEvent } from 'react';
import { useState } from 'react';
import { AUTH_ERRORS } from '../domain/auth.errors';
import { isValidEmail } from '../domain/auth.validators';
import type { AuthenticatedUser } from '../domain/auth.types';
import { createAuthGateway } from '../infrastructure/factories/createAuthGateway';
import { authenticateUser } from '../application/use-cases/authenticateUser';

const authGateway = createAuthGateway();

export const useLoginForm = (onLogin: (user: AuthenticatedUser) => void) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!email.trim()) {
      setError(AUTH_ERRORS.missingEmail);
      return;
    }

    if (!isValidEmail(email)) {
      setError(AUTH_ERRORS.invalidEmail);
      return;
    }

    if (!password.trim()) {
      setError(AUTH_ERRORS.missingPassword);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await authenticateUser(authGateway, email, password);

      if (result.success && result.user) {
        onLogin(result.user);
        return;
      }

      setError(result.message);
    } catch {
      setError(AUTH_ERRORS.unexpected);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    error,
    isLoading,
    showPassword,
    setEmail,
    setPassword,
    setShowPassword,
    handleSubmit,
  };
};
