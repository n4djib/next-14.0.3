import {
  integer,
  sqliteTable,
  text,
  //   primaryKey,
} from "drizzle-orm/sqlite-core";

import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";
// import { relations } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  //   verified: integer("verified", { mode: "boolean" }).default(false),
  //   verifyToken: text("verifyToken"),
  //   verifyTokenExpiry: integer("verifyTokenExpiry", {
  //     mode: "timestamp",
  //   }),
});

export type SelectUser = InferSelectModel<typeof users>;
export type InsertUser = InferInsertModel<typeof users>;
