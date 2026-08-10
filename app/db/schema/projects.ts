
import { sql } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { randomUUID } from "node:crypto";

const currentYear = new Date().getFullYear();

export const projects = sqliteTable("projects", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  title: text("title").notNull(),
  location: text("location"),
  country: text("country").notNull().default(''),
  description: text("description").notNull().default('{"en":"","es":""}'),
  coverImage: text("coverImage").notNull().default(''),
  finalized: integer("finalized").notNull().default(0),
  visible: integer("visible").notNull().default(0),
  home: integer("home").notNull().default(0),
  area: integer("area").notNull().default(0),
  order: integer("order").notNull().default(0),
  gallery: text("gallery").notNull().default('[]'),
  category: text("category").notNull().default(''),
  year: integer("year").notNull().default(currentYear),
  createAt: text("createAt").notNull().default(sql`(CURRENT_TIMESTAMP)`),
  updateAt: text("updateAt").notNull().default(sql`(CURRENT_TIMESTAMP)`),
});