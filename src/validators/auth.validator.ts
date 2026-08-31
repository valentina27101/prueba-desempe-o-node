import * as Joi from "joi";

/**
 * Validates registration data for a user.
 */

export const registerUserSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(8).max(100).required(),
  role: Joi.string().valid("ADMIN", "GESTOR").required(),
});

/**
 * Validates login credentials.
 */
export const loginUserSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  password: Joi.string().required(),
});