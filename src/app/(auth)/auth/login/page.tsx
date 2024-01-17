import React from "react";
import LoginForm from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function LoginPage() {
  const session = await getServerSession();
  console.log("LoginPage:", { session });
  if (session) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-xl">Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
