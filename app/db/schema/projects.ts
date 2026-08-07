
import { sql } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { randomUUID } from "node:crypto";

const currentYear = new Date().getFullYear().toString();

export const projects = sqliteTable("projects", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  title: text("title").notNull(),
  location: text("location"),
  description: text("description").notNull(),
  image: text("image").notNull().default(''),
  coverImage: text("coverImage").notNull().default(''),
  visible: integer("visible").notNull().default(0),
  order: integer("order").notNull().default(0),
  gallery: text("gallery").notNull().default('[]'),
  category: text("category").notNull().default(''),
  year: text("year").notNull().default(currentYear),
  createAt: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
});