import { app } from "./app";
import { sequelize } from "./config/database";
import { env } from "./config/env";
import "./models";

/**
 * Starts the application after connecting to PostgreSQL.
 */
async function startServer() {
  try {
    await sequelize.authenticate();

    // Convenient for a technical test. Production projects should use migrations.
    await sequelize.sync();

    app.listen(env.port, () => {
      console.log(`API: http://localhost:${env.port}`);
      console.log(`Swagger: http://localhost:${env.port}/api/docs`);
    });
  } catch (error) {
    console.error("Unable to start application:", error);
    process.exit(1);
  }
}

void startServer();