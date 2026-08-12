
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

const currentYear = new Date().getFullYear().toString();

export const languages = sqliteTable("languages", {
  id: text("id").primaryKey(),
  data: text("data").notNull()
});