// ✅ Add these lines at the very top
import { config as loadEnv } from "dotenv";
loadEnv(); // Load environment variables from .env before Prisma tries to read them

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"), // Now this will be loaded correctly
  },
});
