import { StateCreator } from "zustand";

export interface IModal {
  currentModal: {
    modalType: string;
    modalProps: Object;
    closeOnModalOverlay: boolean;
  } | null;

  openModal: (
    modalType: string,
    modalProps: Object,
    closeOnModalOverlay?: boolean
  ) => void;

  closeModal: () => void;
}

const createModalSlice: StateCreator<IModal> = (set) => ({
  currentModal: null,

  openModal: (modalType, modalProps, closeOnModalOverlay = true) => {
    set({ currentModal: { modalType, modalProps, closeOnModalOverlay } });
  },

  closeModal: () => set({ currentModal: null }),
});

export default createModalSlice;
