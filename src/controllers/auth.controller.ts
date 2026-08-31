import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

/**
 * Handles authentication HTTP requests.
 */
export class AuthController {
  public constructor(public readonly service: AuthService) {}

  /**
   * Registers a user.
   */
  async register(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.service.register(req.body);
      res.status(201).json(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error";
      res.status(message === "Email already registered" ? 409 : 400).json({ message });
    }
  }

  /**
   * Logs in a user and returns a JWT.
   */
  async login(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.service.login(req.body);
      res.status(200).json(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error";
      res.status(401).json({ message });
    }
  }
}