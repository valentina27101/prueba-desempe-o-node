import {Request} from "express";

/**
 * Roles available in the application.
 */
export type UserRole = "ADMIN" | "GESTOR";

/**
 * Claims stored inside the JWT.
 */
export interface JwtPayload {
  id: number;
  role: UserRole;
}

/**
 * Express request extended with authenticated-user information.
 */
export interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}