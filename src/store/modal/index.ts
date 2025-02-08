import { create } from "zustand";

interface BaseModalConfig {
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export interface ConfirmModalConfig extends BaseModalConfig {
  type: "confirm";
  message: string;
  onConfirm: () => void;
}

export interface ImageModalConfig extends BaseModalConfig {
  type: "image";
  onConfirm: (selectedImage: string) => void;
}


export type ModalConfig = ConfirmModalConfig | ImageModalConfig;

interface ModalStore {
  isOpen: boolean;
  config: ModalConfig | null;
  showModal: (config: ModalConfig) => void;
  hideModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  config: null,
  showModal: (config) => set({ isOpen: true, config }),
  hideModal: () => set({ isOpen: false, config: null }),
}));
