
import { sql } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { randomUUID } from "node:crypto";

const currentYear = new Date().getFullYear().toString();

export const languages = sqliteTable("languages", {
  id: text("id").primaryKey(),
  data: text("data").notNull()
});