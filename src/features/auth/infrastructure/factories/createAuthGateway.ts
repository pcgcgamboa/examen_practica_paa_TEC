import { AUTH_CONFIG } from '../../config/auth.config';
import type { AuthGateway } from '../../application/ports/AuthGateway';
import { LocalAuthGateway } from '../gateways/LocalAuthGateway';
import { WebApiAuthGateway } from '../gateways/WebApiAuthGateway';
import { PublicIpProvider } from '../../../exam/infrastructure/providers/PublicIpProvider';

const ipProvider = new PublicIpProvider();

export const createAuthGateway = (): AuthGateway => {
  if (AUTH_CONFIG.useWebApiAuth) {
    return new WebApiAuthGateway(ipProvider);
  }

  return new LocalAuthGateway();
};
