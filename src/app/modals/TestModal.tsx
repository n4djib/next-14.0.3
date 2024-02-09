"use client";

// import ModalWrapper from "./ModalWrapper";
import ModalWrapper from "./ModalWrapper2";
import { useStore } from "@/lib/zustand/useStore";
// import BTN from "@mui/material/Button";
import { Button } from "@/app/_components/ui/button";
import { DialogFooter, DialogHeader } from "../_components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

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
      {/* <DialogHeader>
        <DialogTitle>Modal Title from Prop</DialogTitle>
      </DialogHeader> */}
      <p>
        <b>Message:</b> {message} <b>- Counter:</b> {counter}
      </p>
      <DialogFooter>
        <Button variant="success" type="submit">
          Save changes
        </Button>
        <Button variant="outline" onClick={closeModal}>
          Cancel
        </Button>
      </DialogFooter>
    </ModalWrapper>
  );
};

export default TestModal;
