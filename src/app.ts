import express from "express";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth.routes";
import { swaggerSpec } from "./docs/swagger";
import clinicRoutes from "./routes/clinic.routes";
import warehouseRoutes from "./routes/warehouse.routes";
import medicineRoutes from "./routes/medicine.routes";
import supplyRequestRoutes from "./routes/supply-request.routes";

/**
 * Express application configuration.
 */
export const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/auth", authRoutes);
app.use("/clinics", clinicRoutes);
app.use("/warehouses", warehouseRoutes);
app.use("/medicines", medicineRoutes);
app.use("/supply-requests", supplyRequestRoutes);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});