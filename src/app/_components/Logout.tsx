"use client";

import { signOut } from "next-auth/react";

function Logout() {
  return (
    <div onClick={() => signOut()} className="cursor-pointer">
      Logout
    </div>
  );
}

export default Logout;
