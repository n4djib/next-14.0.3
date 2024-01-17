import {
  initTRPC,
  // TRPCError
} from "@trpc/server";

import type { Context } from "./context";

// const t = initTRPC.create();
const t = initTRPC.context<Context>().create();

export const router = t.router;
export const middleware = t.middleware;

const isAdmin = middleware((opts) => {
  // if (!user || !user?.isAdmin) {
  //   throw new TRPCError({ code: "UNAUTHORIZED" });
  // }

  // or we can stop it here
  // throw new TRPCError({ code: "PRECONDITION_FAILED" });

  const { ctx } = opts;
  console.log("-middleware:", { ctx });

  return opts.next({
    // you must respect the context type
    ctx: { user: { name: "nadjib changed in middleware" } },
  });
  // return opts.next();
});

export const publicProcedure = t.procedure;
export const adminProcedure = publicProcedure.use(isAdmin);
