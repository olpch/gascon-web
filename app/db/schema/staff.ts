
import { sql } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { randomUUID } from "node:crypto";



export const staff = sqliteTable("staff", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: text("name").notNull(),
  role: text("role").notNull(),
  email: text("email").notNull(),
  bio: text("bio").notNull(),
  image: text("image").notNull().default(''),
  linkedin: text("linkedin").notNull().default(''),
  instagram: text("instagram").notNull().default(''),
  visible: integer("visible").notNull().default(0),
  projects: text("projects").notNull().default('[]'),
  createAt: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
});