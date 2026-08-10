
import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { randomUUID } from "node:crypto";

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  pwd: text("pwd").notNull(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  avatar: text("avatar").notNull().default('/img/avatar-m.jpg'),
  role: text("role").notNull().default('user'),
  createAt: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
});
