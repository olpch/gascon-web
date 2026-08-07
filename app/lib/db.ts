import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const data = {
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
}

export const client = createClient(data);

export const db = drizzle({client});