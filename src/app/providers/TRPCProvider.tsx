"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

import { trpc } from "@/lib/trpc/client";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type TRPCProviderProps = {
  children: React.ReactNode;
};

export default function TRPCProvider({ children }: TRPCProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url:
            process.env.NEXT_PUBLIC_BASE_URL +
            process.env.NEXT_PUBLIC_TRPC_API_URL,
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
