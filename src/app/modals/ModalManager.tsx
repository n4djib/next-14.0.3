"use client";

import { useStore } from "@/lib/zustand/useStore";
import TestModal from "./TestModal";

// check if auto-complete works
// if not then you should specify the type
const modalsLookup: any = {
  TestModal,
};

function ModalManager() {
  const currentModal = useStore((state) => state.currentModal);

  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalsLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <>{renderedModal}</>;
}

export default ModalManager;
