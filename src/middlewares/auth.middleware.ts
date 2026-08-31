import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { AuthenticatedRequest, JwtPayload } from "../types/auth.types";

/**
 * Validates the JWT sent through Authorization: Bearer <token>.
 *
 * Checks:
 * 1. Authorization header exists.
 * 2. Bearer format is correct.
 * 3. Token signature is valid.
 * 4. Token has not expired.
 * 5. Required id and role claims exist.
 */
export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    res.status(401).json({ 
        message: "JWT required" 
    });
    return;
  }

  const token = authorization.substring(7);

  try {
    const payload = jwt.verify(
        token, 
        env.jwtSecret
    ) as JwtPayload;

     req.user = payload;

        next();
  } catch {
        res.status(401).json({
            message: "Invalid or expired token",
        });
  }
};

/**
 * Authorizes users according to their role.
 * @param roles Allowed roles.
 */
export const authorize = (...roles: Array<"ADMIN" | "GESTOR">) => {
  return ( req: AuthenticatedRequest,res: Response, next: NextFunction ): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ 
        message: "Insufficient permissions" 
    });
      return;
    }
    next();
  };
};