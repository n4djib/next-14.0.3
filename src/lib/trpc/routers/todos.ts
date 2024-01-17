import { z } from "zod";
import { publicProcedure, adminProcedure, router } from "../trpc";
// import { addTodo, getTodos, setTodoDone } from "@/lib/drizzle/todos";

export const todosRouter = router({
  getTodos: publicProcedure.query(async (opts) => {
    const { ctx } = opts;
    console.log("getTodos:", { ctx });
    console.log();
    // const todos = await getTodos();
    // return todos;
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    const { ctx } = opts;
    console.log("-addTodo:", { ctx });
    console.log();
    // await addTodo({ content: opts.input, done: 0 });
  }),
  setDone: adminProcedure
    .input(z.object({ id: z.number(), done: z.number() }))
    .mutation(async (opts) => {
      const { ctx } = opts;
      console.log("-setDone:", { ctx });
      console.log();
      // await setTodoDone(opts.input.id, opts.input.done);
    }),
});
