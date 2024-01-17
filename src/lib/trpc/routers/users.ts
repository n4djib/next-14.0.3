import { z } from "zod";
import { publicProcedure, adminProcedure, router } from "../trpc";
import { getUsers } from "@/lib/drizzle/users";

export const usersRouter = router({
  getUsers: publicProcedure.query(async (opts) => {
    const { ctx } = opts;
    // console.log("getUsers:", { ctx });
    // console.log();
    const users = await getUsers();
    return users;
  }),
});
