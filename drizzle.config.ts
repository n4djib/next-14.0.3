import type { Config } from "drizzle-kit";
// import dotenv from "dotenv";

// // to fill process.env. variables outside of Next app
// dotenv.config({ path: ".env.local" });

// if (!process.env.DATABASE_URL_PG) {
//   throw new Error("DATABASE_URL_PG is missing");
// }

// this is not used by db:generate or db:migrate

// npm drizzle-kit generate:sqlite

export default {
  schema: "./src/lib/drizzle/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  // dbCredentials: {
  //   url: "sqlite1.db",
  // },
} satisfies Config;
