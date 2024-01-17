import { httpBatchLink } from "@trpc/client";
import { appRouter } from "./routers";

export const serverSideCaller = appRouter.createCaller({
  // links: [
  //   httpBatchLink({
  //     url:
  //       process.env.NEXT_PUBLIC_BASE_URL + process.env.NEXT_PUBLIC_TRPC_API_URL,
  //   }),
  // ],

  // this is where you fill the contect for Sever Side Caller calls
  user: {
    name: "nadjib from server side caller",
  },
});
