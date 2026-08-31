import { Request, Response } from "express";
import { WarehouseService } from "../services/warehouse.service";

/**
 * Handles HTTP requests related to warehouses.
 */
export class WarehouseController {
  public constructor(
    public readonly warehouseService: WarehouseService
  ) {}

  /**
   * Returns all active warehouses.
   */
  async findAll(req: Request, res: Response): Promise<void> {
    const warehouses = await this.warehouseService.findAll();

    res.status(200).json(warehouses);
  }

  /**
   * Returns one warehouse.
   */
  async findById(req: Request, res: Response): Promise<void> {
    try {
      const warehouse = await this.warehouseService.findById(
        Number(req.params.id)
      );

      res.status(200).json(warehouse);
    } catch (error) {
      res.status(404).json({
        message: error instanceof Error ? error.message : "Warehouse not found",
      });
    }
  }

  /**
   * Creates a warehouse.
   */
  async create(req: Request, res: Response): Promise<void> {
    const warehouse = await this.warehouseService.create(req.body);

    res.status(201).json(warehouse);
  }

  /**
   * Updates a warehouse.
   */
  async update(req: Request, res: Response): Promise<void> {
    try {
      const warehouse = await this.warehouseService.update(
        Number(req.params.id),
        req.body
      );

      res.status(200).json(warehouse);
    } catch (error) {
      res.status(404).json({
        message: error instanceof Error ? error.message : "Warehouse not found",
      });
    }
  }

  /**
   * Logically deletes a warehouse.
   */
  async delete(req: Request, res: Response): Promise<void> {
    try {
      await this.warehouseService.delete(Number(req.params.id));

      res.status(204).send();
    } catch (error) {
      res.status(404).json({
        message: error instanceof Error ? error.message : "Warehouse not found",
      });
    }
  }
}