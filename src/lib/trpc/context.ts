import { inferAsyncReturnType } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export const createTRPCContext = async (opts: FetchCreateContextFnOptions) => {
  // here is were we fill the context
  // this function returns ctx
  const user = { name: "nadjib from context" };

  return {
    user,
  };
};

export type Context = inferAsyncReturnType<typeof createTRPCContext>;
