import Counter from "@/app/_components/Counter";
import ModalOpener from "@/app/_components/ModalOpener";
import React from "react";

function page() {
  return (
    <div>
      <h1>Modals Page</h1>
      <Counter />
      <br />
      <ModalOpener />
    </div>
  );
}

export default page;
