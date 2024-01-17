import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

import * as schema from "./schema";

const sqlite = new Database(process.env.DATABASE_URL);

// const db = drizzle(sqlite);
const db = drizzle(sqlite, { schema });

migrate(db, { migrationsFolder: "drizzle" });

export default db;
