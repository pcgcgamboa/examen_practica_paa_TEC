export type Nullable<T> = T | null;

export type DialogType = 'confirm' | 'alert' | 'warning';

export interface DialogConfig {
  isOpen: boolean;
  title: string;
  message: string;
  type: DialogType;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}
