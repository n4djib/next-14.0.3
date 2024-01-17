import db from "./db";
import { InsertUser, users } from "./schema";
// import { eq, or } from "drizzle-orm";

export async function getUsers() {
  // return await db.select().from(users);
  const users = await db.query.users.findMany();
  return users;
}

export async function getUser(search_word: string) {
  const user = await db.query.users.findFirst({
    where: (users, { eq, or }) => {
      return or(eq(users.username, search_word), eq(users.email, search_word));
    },
    // with: { userRoles: true },
  });
  return user;
}

export async function getUserByEmail(email: string) {
  // const users = await db.select().from(users_model)
  //   .where(eq(users_model.email, email));
  // return users[0];

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
    // with: { userRoles: true },
  });
  return user;
}

export async function createUser(user: InsertUser) {
  return await db.insert(users).values(user);
}
