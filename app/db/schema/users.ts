
import { sql } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { randomUUID } from "node:crypto";

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  pwd: text("pwd").notNull(),
  email: text("name").notNull(),
  name: text("email").notNull(),
  createAt: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
});