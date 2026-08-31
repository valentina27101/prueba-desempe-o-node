import Joi from "joi";

/**
 * Validates medicine creation data.
 */
export const createMedicineSchema = Joi.object({
  name: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  stock: Joi.number().integer().min(0).required(),
  minimumStock: Joi.number().integer().min(0).required(),
});

/**
 * Validates medicine update data.
 */
export const updateMedicineSchema = Joi.object({
  name: Joi.string().trim(),
  description: Joi.string().trim(),
  stock: Joi.number().integer().min(0),
  minimumStock: Joi.number().integer().min(0),
}).min(1);