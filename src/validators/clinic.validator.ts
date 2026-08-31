import Joi from "joi";

/**
 * Validates clinic creation data.
 */
export const createClinicSchema = Joi.object({
  name: Joi.string().trim().required(),
  nit: Joi.string().trim().required(),
  responsibleName: Joi.string().trim().required(),
});

/**
 * Validates clinic update data.
 */
export const updateClinicSchema = Joi.object({
  name: Joi.string().trim(),
  nit: Joi.string().trim(),
  responsibleName: Joi.string().trim(),
}).min(1);