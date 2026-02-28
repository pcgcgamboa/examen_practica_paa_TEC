import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title: string;
  message: string;
  type?: 'confirm' | 'alert' | 'warning';
  confirmText?: string;
  cancelText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  type = 'confirm',
  confirmText = 'Aceptar',
  cancelText = 'Cancelar',
}) => {
  if (!isOpen) {
    return null;
  }

  const handleConfirm = () => {
    onClose();
    onConfirm?.();
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'warning':
        return (
          <svg className={`${styles.icon} ${styles.iconWarning}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      case 'alert':
        return (
          <svg className={`${styles.icon} ${styles.iconInfo}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );
      default:
        return (
          <svg className={`${styles.icon} ${styles.iconQuestion}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.container}>
        <div
          className={`${styles.content} ${
            type === 'warning' ? styles.contentWarning : type === 'alert' ? styles.contentAlert : ''
          }`}
        >
          <div className={styles.header}>
            {getIcon()}
            <h3 className={styles.title}>{title}</h3>
          </div>

          <div className={styles.body}>
            <p className={styles.message}>{message}</p>
          </div>

          <div className={styles.footer}>
            {type === 'confirm' || type === 'warning' ? (
              <>
                <button className={`${styles.button} ${styles.buttonCancel}`} onClick={onClose}>
                  {cancelText}
                </button>
                <button className={`${styles.button} ${styles.buttonConfirm}`} onClick={handleConfirm}>
                  {confirmText}
                </button>
              </>
            ) : (
              <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={handleConfirm}>
                {confirmText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
