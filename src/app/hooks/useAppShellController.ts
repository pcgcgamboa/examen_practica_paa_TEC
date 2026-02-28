import { useState } from 'react';
import type { ConsentDecision } from '../../features/consent/domain/consent.types';
import { useExamController } from '../../features/exam/application/hooks/useExamController';
import { logger } from '../../shared/lib/logging/logger';
import { useAuthCoordinator } from '../coordinators/useAuthCoordinator';
import { useConsentCoordinator } from '../coordinators/useConsentCoordinator';
import { useExamCompletionCoordinator } from '../coordinators/useExamCompletionCoordinator';
import { resolveAppScreen } from '../flow/resolveAppScreen';
import { appShellDependencies } from '../config/appShell.dependencies';
import { useDialogController } from './useDialogController';

export const useAppShellController = () => {
  const [consentDecision, setConsentDecision] = useState<ConsentDecision | null>(null);
  const { dialogConfig, openDialog, closeDialog } = useDialogController();
  const authCoordinator = useAuthCoordinator();

  const examController = useExamController({
    questionBank: appShellDependencies.questionBank,
    examConfig: appShellDependencies.examConfig,
    submissionGateway: appShellDependencies.submissionGateway,
    deviceInfoProvider: appShellDependencies.deviceInfoProvider,
    logger,
  });

  const consentCoordinator = useConsentCoordinator({
    user: authCoordinator.user,
    consentStore: appShellDependencies.consentStore,
    setConsentDecision,
  });
  const examCompletionCoordinator = useExamCompletionCoordinator({
    examController,
    user: authCoordinator.user,
    consentTimestamp: consentCoordinator.consentTimestamp,
    openDialog,
  });
  const currentScreen = resolveAppScreen({
    isAuthenticated: Boolean(authCoordinator.user),
    consentDecision,
    examState: examController.state,
  });

  const handleLogin = (loggedUser: Parameters<typeof authCoordinator.authenticateUser>[0]) => {
    authCoordinator.authenticateUser(loggedUser);
    consentCoordinator.syncConsentDecision(loggedUser);
    examController.initializeAuthenticatedSession();
  };

  const resetAuthenticatedFlow = () => {
    authCoordinator.clearAuthenticatedUser();
    consentCoordinator.resetConsentDecision();
    examController.resetForLogout();
  };

  const handleBackFromRejection = () => {
    consentCoordinator.clearCurrentConsent();
    resetAuthenticatedFlow();
  };

  const handleLogout = () => {
    consentCoordinator.clearCurrentConsent();
    closeDialog();
    resetAuthenticatedFlow();
  };

  return {
    user: authCoordinator.user,
    dialogConfig,
    examController,
    currentScreen,
    consentPdfUrl: appShellDependencies.consentPdfUrl,
    handleLogin,
    handleAcceptConsent: consentCoordinator.handleAcceptConsent,
    handleRejectConsent: consentCoordinator.handleRejectConsent,
    handleBackFromRejection,
    handleLogout,
    handleFinishExam: examCompletionCoordinator.handleFinishExam,
    handleExpireExam: examCompletionCoordinator.handleExpireExam,
    openDialog,
    closeDialog,
  };
};
