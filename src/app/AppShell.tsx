import React from 'react';
import Modal from '../shared/components/Modal/Modal';
import AppScreenContent from './components/AppScreenContent';
import { useAppShellController } from './hooks/useAppShellController';

const AppShell: React.FC = () => {
  const controller = useAppShellController();

  return (
    <div className="app">
      <AppScreenContent {...controller} />

      <Modal
        isOpen={controller.dialogConfig.isOpen}
        onClose={controller.closeDialog}
        onConfirm={controller.dialogConfig.onConfirm}
        title={controller.dialogConfig.title}
        message={controller.dialogConfig.message}
        type={controller.dialogConfig.type}
        confirmText={controller.dialogConfig.confirmText || 'Aceptar'}
        cancelText={controller.dialogConfig.cancelText || 'Cancelar'}
      />
    </div>
  );
};

export default AppShell;
