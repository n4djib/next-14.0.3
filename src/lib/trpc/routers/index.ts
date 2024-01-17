import { publicProcedure, router } from "../trpc";
import { helloRouter } from "./hello";
import { usersRouter } from "./users";

export const appRouter = router({
  ping: publicProcedure.query(async () => {
    return { message: "pong!" };
  }),

  users: usersRouter,
  hello: helloRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
