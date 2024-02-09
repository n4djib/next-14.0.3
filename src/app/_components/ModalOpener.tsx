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
      <Button size="sm" variant="destructive">
        shadcn UI Button
      </Button>
      <Button size="sm" variant="success" className="shadow-2xl">
        INCREASE
      </Button>
      {/* className="bg-green-700" */}

      <p className="text-destructive">Test Text Color</p>
      <p className="text-success-foreground">Test Text Color</p>
      <p className="text-success">Test Text Color</p>
      <button className="p-2 bg-red-500 shadow shadow-md">sssss</button>
    </div>
  );
};

export default ModalOpener;
