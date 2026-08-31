import { Sequelize } from "sequelize";
import { env } from "./env";

/**
 * Sequelize connection used by all models.
 */
export const sequelize = new Sequelize(
  env.dbName,
  env.dbUser,
  env.dbPassword,
  {
    host: env.dbHost,
    port: env.dbPort,
    dialect: "postgres",
    logging: false,
  }
);