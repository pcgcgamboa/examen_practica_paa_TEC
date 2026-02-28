import type { AuthResult } from '../../domain/auth.types';

export interface AuthGateway {
  authenticate(email: string, password: string): Promise<AuthResult>;
}
