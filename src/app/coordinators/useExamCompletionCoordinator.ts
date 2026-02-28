import type { DialogConfig } from '../../shared/types/common.types';
import type { AuthenticatedUser } from '../../features/auth/domain/auth.types';
import type { useExamController } from '../../features/exam/application/hooks/useExamController';

interface UseExamCompletionCoordinatorParams {
  examController: Pick<
    ReturnType<typeof useExamController>,
    'hasPendingFinishConfirmation' | 'finishCurrentExam' | 'expireCurrentExam'
  >;
  user: AuthenticatedUser | null;
  consentTimestamp: string | null;
  openDialog: (
    title: string,
    message: string,
    type: DialogConfig['type'],
    onConfirm?: () => void,
    confirmText?: string,
  ) => void;
}

export const useExamCompletionCoordinator = ({
  examController,
  user,
  consentTimestamp,
  openDialog,
}: UseExamCompletionCoordinatorParams) => {
  const openSubmissionResultDialog = (message: string) => {
    openDialog('Resultado del Envio', `${message}\n\nSe descargo una copia local.`, 'alert');
  };

  const handleFinishExam = async () => {
    if (examController.hasPendingFinishConfirmation) {
      openDialog(
        'Finalizar Examen',
        'No has respondido o verificado todas las preguntas. Estas seguro de que deseas finalizar el examen?',
        'warning',
        async () => {
          const result = await examController.finishCurrentExam(user, consentTimestamp);
          openSubmissionResultDialog(result.message);
        },
        'Si, finalizar',
      );
      return;
    }

    const result = await examController.finishCurrentExam(user, consentTimestamp);
    openSubmissionResultDialog(result.message);
  };

  const handleExpireExam = async () => {
    const result = await examController.expireCurrentExam(user, consentTimestamp);
    openSubmissionResultDialog(result.message);
  };

  return {
    handleFinishExam,
    handleExpireExam,
  };
};
