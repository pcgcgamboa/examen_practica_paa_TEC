import type { AuthGateway } from '../ports/AuthGateway';

export const authenticateUser = (gateway: AuthGateway, email: string, password: string) => {
  return gateway.authenticate(email, password);
};
