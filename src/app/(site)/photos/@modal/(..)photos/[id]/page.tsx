"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import photos, { Photo } from "@/data/photos";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

function InterceptedPhotoPage({ params: { id } }: { params: { id: string } }) {
  const photo: Photo = photos.find((p) => p.id === id)!;

  const [open, setOpen] = useState(true);

  function closeModal() {
    setOpen(false);
  }

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={closeModal}
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
        <ModalClose variant="outlined" onClick={closeModal} />
        Photo Page #{id}
        {/* <div className="mt-10 w-1/3  h-15 w-20"> */}
        <div className="mt-10 ">
          <Image
            alt=""
            src={photo.imageSrc}
            height={500}
            width={500}
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      </Sheet>
    </Modal>
  );
}

export default InterceptedPhotoPage;
