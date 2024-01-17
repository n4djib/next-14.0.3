import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const helloRouter = router({
  // i don't know how to pass the text value in the URL
  // http://localhost:3000/api/trpc/hello.greet
  // const { data: hello } = trpc.hello.greet.useQuery({ text: "Nadjib" });
  greet: publicProcedure
    .input(z.object({ text: z.string() }).nullish())
    .query(({ input }) => {
      return {
        // message: `Hello ${input?.text ? input.text : "World!"}`,
        message: `Hello ${input?.text ?? "World!"}`,
      };
    }),
});
