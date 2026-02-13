import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";

const { Pool } = pkg;

// Create pg pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Create adapter
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
  log: ["error", "warn"],
});

export async function connectDB() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully 🚀");
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  }
}
