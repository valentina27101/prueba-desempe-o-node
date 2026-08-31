import Joi from "joi";

/**
 * Validates supply request creation data.
 */
export const createSupplyRequestSchema = Joi.object({
  clinicId: Joi.number().integer().positive().required(),
  medicineId: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().required(),
});

/**
 * Validates status updates.
 */
export const updateSupplyRequestSchema = Joi.object({
  status: Joi.string()
    .valid("APPROVED", "REJECTED")
    .required(),
});