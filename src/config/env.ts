import * as dotenv from "dotenv";

// Load configuration from the local .env file.
dotenv.config();

/**
 * Central application configuration.
 */
export const env = {
  port: Number(process.env.PORT) || 3000,
  jwtSecret: process.env.JWT_SECRET || "development_secret",
  dbHost: process.env.DB_HOST || "localhost",
  dbPort: Number(process.env.DB_PORT) || 5432,
  dbName: process.env.DB_NAME || "technical_test",
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "postgres",
};