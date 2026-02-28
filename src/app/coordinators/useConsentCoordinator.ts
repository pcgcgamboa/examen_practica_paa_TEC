import type { Dispatch, SetStateAction } from 'react';
import type { AuthenticatedUser } from '../../features/auth/domain/auth.types';
import { acceptConsent } from '../../features/consent/application/use-cases/acceptConsent';
import { clearConsent } from '../../features/consent/application/use-cases/clearConsent';
import { loadConsentDecision } from '../../features/consent/application/use-cases/loadConsentDecision';
import { rejectConsent } from '../../features/consent/application/use-cases/rejectConsent';
import type { ConsentStore } from '../../features/consent/application/ports/ConsentStore';
import type { ConsentDecision } from '../../features/consent/domain/consent.types';

interface UseConsentCoordinatorParams {
  user: AuthenticatedUser | null;
  consentStore: ConsentStore;
  setConsentDecision: Dispatch<SetStateAction<ConsentDecision | null>>;
}

export const useConsentCoordinator = ({ user, consentStore, setConsentDecision }: UseConsentCoordinatorParams) => {
  const consentTimestamp = user ? consentStore.loadTimestamp(user.email) : null;

  const syncConsentDecision = (authenticatedUser: AuthenticatedUser) => {
    setConsentDecision(loadConsentDecision(consentStore, authenticatedUser.email));
  };

  const handleAcceptConsent = () => {
    if (!user) {
      return;
    }

    const timestamp = new Date().toISOString();
    acceptConsent(consentStore, user.email, timestamp);
    setConsentDecision('accepted');
  };

  const handleRejectConsent = () => {
    if (!user) {
      return;
    }

    rejectConsent(consentStore, user.email);
    setConsentDecision('rejected');
  };

  const clearCurrentConsent = () => {
    if (!user) {
      return;
    }

    clearConsent(consentStore, user.email);
  };

  const resetConsentDecision = () => {
    setConsentDecision(null);
  };

  return {
    consentTimestamp,
    syncConsentDecision,
    handleAcceptConsent,
    handleRejectConsent,
    clearCurrentConsent,
    resetConsentDecision,
  };
};
