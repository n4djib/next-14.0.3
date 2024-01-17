import React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/material/Typography";
import { useStore } from "@/lib/zustand/useStore";

type ModalWrapperProps = {
  children: React.ReactNode;
  closeOnModalOverlay: boolean;
  title: string;
};

const ModalWrapper = ({
  children,
  closeOnModalOverlay,
  title,
}: ModalWrapperProps) => {
  const closeModal = useStore((state) => state.closeModal);

  const closeOnOverlayClick = () => closeOnModalOverlay && closeModal();

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={true}
      onClose={closeOnOverlayClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000033",
        backdropFilter: "blur(1px)",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: "80%",
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        {/* <ModalClose
          variant="outlined"
          sx={{
            top: "calc(-1/4 * var(--IconButton-size))",
            right: "calc(-1/4 * var(--IconButton-size))",
            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
            borderRadius: "50%",
            bgcolor: "background.body",
          }}
          onClick={closeModal}
        /> */}
        <ModalClose variant="outlined" onClick={closeModal} />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>

        {children}
      </Sheet>
    </Modal>
  );
};

export default ModalWrapper;
