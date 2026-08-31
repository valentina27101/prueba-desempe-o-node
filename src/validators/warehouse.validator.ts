import Joi from "joi";

/**
 * Validates warehouse creation data.
 */
export const createWarehouseSchema = Joi.object({
  name: Joi.string().trim().required(),
  location: Joi.string().trim().required(),
});

/**
 * Validates warehouse update data.
 */
export const updateWarehouseSchema = Joi.object({
  name: Joi.string().trim(),
  location: Joi.string().trim(),
}).min(1);