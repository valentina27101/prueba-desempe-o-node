import {
  CreateClinicDto,
  UpdateClinicDto,
} from "../dto/clinic.dto";
import { ClinicRepository } from "../repositories/clinic.repository";

/**
 * Contains clinic business logic.
 */
export class ClinicService {
  public constructor(
    public readonly clinicRepository: ClinicRepository
  ) {}

  public async getAll() {
    return this.clinicRepository.findAll();
  }

  public async getById(id: number) {
    const clinic = await this.clinicRepository.findById(id);

    if (!clinic) {
      throw new Error("Clinic not found");
    }

    return clinic;
  }

  public async create(data: CreateClinicDto) {
    const existingClinic = await this.clinicRepository.findByNit(data.nit);

    if (existingClinic) {
      throw new Error("Clinic NIT already registered");
    }

    return this.clinicRepository.create(data);
  }

  public async update(id: number, data: UpdateClinicDto) {
    const clinic = await this.clinicRepository.findById(id);

    if (!clinic) {
      throw new Error("Clinic not found");
    }

    if (data.nit) {
      const existingClinic = await this.clinicRepository.findByNit(data.nit);

      if (existingClinic && existingClinic.id !== id) {
        throw new Error("Clinic NIT already registered");
      }
    }

    return this.clinicRepository.update(clinic, data);
  }

  public async delete(id: number) {
    const clinic = await this.clinicRepository.findById(id);

    if (!clinic) {
      throw new Error("Clinic not found");
    }

    return this.clinicRepository.delete(clinic);
  }
}