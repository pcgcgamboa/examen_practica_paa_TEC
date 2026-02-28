import { useState } from 'react';
import type { AuthenticatedUser } from '../../features/auth/domain/auth.types';

export const useAuthCoordinator = () => {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);

  const authenticateUser = (authenticatedUser: AuthenticatedUser) => {
    setUser(authenticatedUser);
  };

  const clearAuthenticatedUser = () => {
    setUser(null);
  };

  return {
    user,
    authenticateUser,
    clearAuthenticatedUser,
  };
};
