"use client";

import { useSession } from "next-auth/react";

function ClientSession() {
  const { data: session } = useSession();

  return (
    <>
      <p>ClientSession: {JSON.stringify(session)}</p>{" "}
    </>
  );
}

export default ClientSession;
