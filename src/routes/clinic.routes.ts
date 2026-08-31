import { Router } from "express";
import { ClinicController } from "../controllers/clinic.controller";
import { ClinicService } from "../services/clinic.service";
import { ClinicRepository } from "../repositories/clinic.repository";
import { authenticate, authorize } from "../middlewares/auth.middleware";
import { validateBody } from "../middlewares/validate.middleware";
import {
  createClinicSchema,
  updateClinicSchema,
} from "../validators/clinic.validator";

const router = Router();

const controller = new ClinicController(
  new ClinicService(new ClinicRepository())
);

// All clinic routes require authentication.
router.use(authenticate);

// Only administrators can manage clinics.
router.post(
  "/",
  authorize("ADMIN"),
  validateBody(createClinicSchema),
  controller.create.bind(controller)
);

router.get(
  "/",
  authorize("ADMIN"),
  controller.getAll.bind(controller)
);

router.get(
  "/:id",
  authorize("ADMIN"),
  controller.getById.bind(controller)
);

router.put(
  "/:id",
  authorize("ADMIN"),
  validateBody(updateClinicSchema),
  controller.update.bind(controller)
);

router.delete(
  "/:id",
  authorize("ADMIN"),
  controller.delete.bind(controller)
);

export default router;