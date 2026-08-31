import { Router } from "express";

import { MedicineController } from "../controllers/medicine.controller";
import { MedicineService } from "../services/medicine.service";
import { MedicineRepository } from "../repositories/medicine.repository";

import { authenticate, authorize } from "../middlewares/auth.middleware";
import { validateBody } from "../middlewares/validate.middleware";

import {
  createMedicineSchema,
  updateMedicineSchema,
} from "../validators/medicine.validator";

const router = Router();

const controller = new MedicineController(
  new MedicineService(new MedicineRepository())
);

/**
 * Get all active medicines.
 * Requires authentication.
 */
router.get(
  "/",
  authenticate,
  controller.findAll.bind(controller)
);

/**
 * Get a medicine by id.
 * Requires authentication.
 */
router.get(
  "/:id",
  authenticate,
  controller.findById.bind(controller)
);

/**
 * Create a medicine.
 * Only ADMIN can create medicines.
 */
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validateBody(createMedicineSchema),
  controller.create.bind(controller)
);

/**
 * Update a medicine.
 * Only ADMIN can update medicines.
 */
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateBody(updateMedicineSchema),
  controller.update.bind(controller)
);

/**
 * Logically delete a medicine.
 * Only ADMIN can delete medicines.
 */
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  controller.delete.bind(controller)
);

export default router;