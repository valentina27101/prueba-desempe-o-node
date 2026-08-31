import express from "express";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth.routes";
import { swaggerSpec } from "./docs/swagger";

/**
 * Express application configuration.
 */
export const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/auth", authRoutes);


app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});