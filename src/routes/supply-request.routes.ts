import { Router } from "express";

import { SupplyRequestController } from "../controllers/supply-request.controller";
import { SupplyRequestService } from "../services/supply-request.service";
import { SupplyRequestRepository } from "../repositories/supply-request.repository";

import { authenticate, authorize } from "../middlewares/auth.middleware";
import { validateBody } from "../middlewares/validate.middleware";

import {
  createSupplyRequestSchema,
  updateSupplyRequestSchema,
} from "../validators/supply-request.validator";

const router = Router();

const controller = new SupplyRequestController(
  new SupplyRequestService(new SupplyRequestRepository())
);

/**
 * Get all supply requests.
 * ADMIN and GESTOR can access.
 */
router.get(
  "/",
  authenticate,
  controller.findAll.bind(controller)
);

/**
 * Get one supply request.
 */
router.get(
  "/:id",
  authenticate,
  controller.findById.bind(controller)
);

/**
 * Create a supply request.
 */
router.post(
  "/",
  authenticate,
  authorize("GESTOR"),
  validateBody(createSupplyRequestSchema),
  controller.create.bind(controller)
);

/**
 * Approve or reject a request.
 * Only ADMIN can change its status.
 */
router.patch(
  "/:id/status",
  authenticate,
  authorize("ADMIN"),
  validateBody(updateSupplyRequestSchema),
  controller.updateStatus.bind(controller)
);

export default router;