import { Request, Response } from "express";
import { ClinicService } from "../services/clinic.service";

/**
 * Handles clinic HTTP requests.
 */
export class ClinicController {
  public constructor(
    public readonly clinicService: ClinicService
  ) {}

  public async getAll(req: Request, res: Response): Promise<void> {
    const clinics = await this.clinicService.getAll();

    res.status(200).json(clinics);
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const clinic = await this.clinicService.getById(
        Number(req.params.id)
      );

      res.status(200).json(clinic);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected error";

      res.status(404).json({ message });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const clinic = await this.clinicService.create(req.body);

      res.status(201).json(clinic);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected error";

      res.status(409).json({ message });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const clinic = await this.clinicService.update(
        Number(req.params.id),
        req.body
      );

      res.status(200).json(clinic);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected error";

      res.status(400).json({ message });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      await this.clinicService.delete(Number(req.params.id));

      res.status(200).json({
        message: "Clinic deleted successfully",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected error";

      res.status(404).json({ message });
    }
  }
}