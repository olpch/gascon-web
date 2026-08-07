import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

  const dbCredentials = {
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.TURSO_AUTH_TOKEN || '',
  }

export default defineConfig({
  dbCredentials,
  dialect: 'turso',
  out: './drizzle',
  schema: './app/db/schema',
});