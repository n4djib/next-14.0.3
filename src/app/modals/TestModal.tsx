"use client";

import ModalWrapper from "./ModalWrapper";
import { useStore } from "@/lib/zustand/useStore";
import BTN from "@mui/material/Button";

type TestModalProps = {
  message: string;
  counter: number;
};

const TestModal = ({ message, counter }: TestModalProps) => {
  const closeModal = useStore((state) => state.closeModal);

  const currentModal = useStore((state) => state.currentModal);

  if (!currentModal) {
    return null;
  }

  const { closeOnModalOverlay } = currentModal;

  return (
    <ModalWrapper
      closeOnModalOverlay={closeOnModalOverlay}
      title="Modal Title from Prop"
    >
      Make sure to use <code>aria-labelledby</code> on the modal dialog with an
      attribute.
      <div>
        <b>Message:</b> {message} <b>- Counter:</b> {counter}
      </div>
      <br />
      <BTN variant="outlined" color="primary" onClick={closeModal}>
        Cancel
      </BTN>
    </ModalWrapper>
  );
};

export default TestModal;
