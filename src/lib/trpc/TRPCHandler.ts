import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./routers";
import { createTRPCContext } from "./context";

export const TRPCHandler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // createContext: () => ({}),
    // createContext: () => ({ user: { name: "nadjib from API Handler" } }),
    createContext: createTRPCContext,
    onError: (opts) => {
      const { error, type, path, input, ctx, req } = opts;
      console.error("Error server:", { error });
    },
  });
};
