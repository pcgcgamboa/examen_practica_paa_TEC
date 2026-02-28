import { useState } from 'react';
import type { DialogConfig } from '../../shared/types/common.types';

const initialDialogState: DialogConfig = {
  isOpen: false,
  title: '',
  message: '',
  type: 'alert',
};

export const useDialogController = () => {
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>(initialDialogState);

  const openDialog = (
    title: string,
    message: string,
    type: DialogConfig['type'],
    onConfirm?: () => void,
    confirmText?: string,
  ) => {
    setDialogConfig({
      isOpen: true,
      title,
      message,
      type,
      onConfirm,
      confirmText,
      cancelText: 'Cancelar',
    });
  };

  const closeDialog = () => {
    setDialogConfig(initialDialogState);
  };

  return {
    dialogConfig,
    openDialog,
    closeDialog,
  };
};
