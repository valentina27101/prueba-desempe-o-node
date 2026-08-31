import { Router } from "express";
import { WarehouseController } from "../controllers/warehouse.controller";
import { WarehouseService } from "../services/warehouse.service";
import { WarehouseRepository } from "../repositories/warehouse.repository";
import { authenticate, authorize } from "../middlewares/auth.middleware";
import { validateBody } from "../middlewares/validate.middleware";
import {
  createWarehouseSchema,
  updateWarehouseSchema,
} from "../validators/warehouse.validator";

const router = Router();

const controller = new WarehouseController(
  new WarehouseService(new WarehouseRepository())
);

// Consultar almacenes: cualquier usuario autenticado.
router.get(
  "/",
  authenticate,
  controller.findAll.bind(controller)
);

// Consultar un almacén.
router.get(
  "/:id",
  authenticate,
  controller.findById.bind(controller)
);

// Crear almacén: solamente ADMIN.
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validateBody(createWarehouseSchema),
  controller.create.bind(controller)
);

// Actualizar almacén: solamente ADMIN.
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateBody(updateWarehouseSchema),
  controller.update.bind(controller)
);

// Eliminar lógicamente: solamente ADMIN.
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  controller.delete.bind(controller)
);

export default router;