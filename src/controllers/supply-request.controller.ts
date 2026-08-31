import { Request, Response } from "express";
import { SupplyRequestService } from "../services/supply-request.service";

/**
 * Handles HTTP requests related to supply requests.
 */
export class SupplyRequestController {
  public constructor(
    public readonly supplyRequestService: SupplyRequestService
  ) {}

  /**
   * Returns all supply requests.
   */
  async findAll(req: Request, res: Response): Promise<void> {
    const requests = await this.supplyRequestService.findAll();

    res.status(200).json(requests);
  }

  /**
   * Returns one supply request.
   */
  async findById(req: Request, res: Response): Promise<void> {
    try {
      const request = await this.supplyRequestService.findById(
        Number(req.params.id)
      );

      res.status(200).json(request);
    } catch (error) {
      res.status(404).json({
        message:
          error instanceof Error
            ? error.message
            : "Supply request not found",
      });
    }
  }

  /**
   * Creates a supply request.
   */
  async create(req: Request, res: Response): Promise<void> {
    const request = await this.supplyRequestService.create(req.body);

    res.status(201).json(request);
  }

  /**
   * Updates the status of a supply request.
   */
  async updateStatus(req: Request, res: Response): Promise<void> {
    try {
      const request = await this.supplyRequestService.updateStatus(
        Number(req.params.id),
        req.body
      );

      res.status(200).json(request);
    } catch (error) {
      res.status(404).json({
        message:
          error instanceof Error
            ? error.message
            : "Supply request not found",
      });
    }
  }
};