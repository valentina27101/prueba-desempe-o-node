import { Request, Response, NextFunction } from "express";
import Joi from "joi";

/**
 * Validates the request body using the provided Joi schema.
 *
 * @param schema Joi schema used to validate the request body.
 */
export const validateBody = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400).json({
        message: error.message,
      });
      return;
    }

    next();
  };
};