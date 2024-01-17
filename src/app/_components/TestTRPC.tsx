"use client";

import React from "react";
import { trpc } from "@/lib/trpc/client";

function TestTRPC() {
  const { isLoading, isError, data } = trpc.hello.greet.useQuery({
    text: "Nadjib",
  });

  const {
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
    data: users,
  } = trpc.users.getUsers.useQuery(undefined, {
    // initialData: initialTodos,
    // refetchOnMount: false,
    // refetchOnReconnect: false,
    // refetchOnWindowFocus: false,
    refetchInterval: 2000,
  });

  return (
    <div>
      <h1>TestTRPC</h1>
      <br />
      <div>
        Greeting: {isLoading ? "TRPC Loading..." : JSON.stringify(data)}
      </div>
      <br />
      <div>
        Users: {isLoadingUsers ? "TRPC Loading..." : JSON.stringify(users)}
      </div>
    </div>
  );
}

export default TestTRPC;
