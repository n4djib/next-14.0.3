"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_repeat: formData.get("password_repeat"),
      }),
    });

    const res_json = await response.json();
    console.log({ res_json });

    router.push("/auth/login");
    // router.refresh();
  }

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit} className="">
        <div>
          <label htmlFor="email">Username:</label>
        </div>
        <div>
          <input
            name="username"
            autoComplete="off"
            className="border border-2 border-gray-400"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <input
            name="email"
            type="email"
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
        <div>
          <label htmlFor="password_repeat">Password Repeat:</label>
        </div>
        <div>
          <input
            name="password_repeat"
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
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
