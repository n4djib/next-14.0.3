"use client";

import React, { useState } from "react";
import { useStore } from "@/lib/zustand/useStore";
import BTN from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { Button } from "@/app/_components/ui/button";

const ModalOpener = () => {
  const counter = useStore((state) => state.counter);
  const openModal = useStore((state) => state.openModal);

  const [message, setMessage] = useState("My Name is Nadjib");

  return (
    <div style={{ all: "revert" }}>
      <br />
      <TextField
        id="outlined-basic"
        label="Mesage for Modal"
        variant="outlined"
        size="small"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <br />
      <BTN
        variant="contained"
        color="secondary"
        onClick={() => openModal("TestModal", { message, counter }, true)}
      >
        Open Test Modal
      </BTN>
      <br />
      <br />
      <br />
      <Button variant="destructive">shadcn UI Button</Button>
    </div>
  );
};

export default ModalOpener;
