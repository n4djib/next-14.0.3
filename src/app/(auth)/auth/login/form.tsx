"use client";

import { getUser } from "@/lib/drizzle/users";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email_username = formData.get("email_username");
    const password = formData.get("password");

    // TODO don't allow non verified accounts
    // const user = await getUser(email_username);
    // setError("User is not verified");
    // return;
    // FIXME

    const response = await signIn("credentials", {
      email_username,
      password,
      redirect: false,
    });

    if (!response?.error) {
      router.push("/");
      router.refresh();
    } else {
      console.log("ERROR:", response?.error);
      setError("Email/Username or Password Wrong!");
    }
  }

  return (
    <div>
      <br />
      <div className="text-red-500">{error}</div>
      <form onSubmit={handleSubmit} className="">
        <div>
          <label htmlFor="email_username">Email/Username:</label>
        </div>
        <div>
          <input
            name="email_username"
            // type="email"
            autoComplete="off"
            className="border border-2 border-gray-400"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
        </div>
        <div>
          <input
            name="password"
            type="password"
            autoComplete="off"
            className="border border-2 border-gray-400"
            required
          />
        </div>
        <br />
        <button
          type="submit"
          className="bg-transparent hover:bg-gray-400  font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
