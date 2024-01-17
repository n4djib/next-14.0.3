import React from "react";
import RegisterForm from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function RegisterPage() {
  const session = await getServerSession();
  console.log("RegisterPage:", { session });
  if (session) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-xl">Register Page</h1>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
