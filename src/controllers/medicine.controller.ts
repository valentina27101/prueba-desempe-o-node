import { Request, Response } from "express";
import { MedicineService } from "../services/medicine.service";

/**
 * Handles HTTP requests related to medicines.
 */
export class MedicineController {
  public constructor(
    public readonly medicineService: MedicineService
  ) {}

  /**
   * Returns all active medicines.
   */
  async findAll(req: Request, res: Response): Promise<void> {
    const medicines = await this.medicineService.findAll();

    res.status(200).json(medicines);
  }

  /**
   * Returns one medicine by id.
   */
  async findById(req: Request, res: Response): Promise<void> {
    try {
      const medicine = await this.medicineService.findById(
        Number(req.params.id)
      );

      res.status(200).json(medicine);
    } catch (error) {
      res.status(404).json({
        message:
          error instanceof Error ? error.message : "Medicine not found",
      });
    }
  }

  /**
   * Creates a medicine.
   */
  async create(req: Request, res: Response): Promise<void> {
    const medicine = await this.medicineService.create(req.body);

    res.status(201).json(medicine);
  }

  /**
   * Updates a medicine.
   */
  async update(req: Request, res: Response): Promise<void> {
    try {
      const medicine = await this.medicineService.update(
        Number(req.params.id),
        req.body
      );

      res.status(200).json(medicine);
    } catch (error) {
      res.status(404).json({
        message:
          error instanceof Error ? error.message : "Medicine not found",
      });
    }
  }

  /**
   * Logically deletes a medicine.
   */
  async delete(req: Request, res: Response): Promise<void> {
    try {
      await this.medicineService.delete(Number(req.params.id));

      res.status(204).send();
    } catch (error) {
      res.status(404).json({
        message:
          error instanceof Error ? error.message : "Medicine not found",
      });
    }
  }
}