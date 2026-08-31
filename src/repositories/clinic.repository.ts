import { Clinic } from "../models/clinic.model";
import { CreateClinicDto, UpdateClinicDto } from "../dto/clinic.dto";

/**
 * Handles database operations for clinics.
 */
export class ClinicRepository {
  public async findAll(): Promise<Clinic[]> {
    return Clinic.findAll({
      where: {
        status: "ACTIVE",
      },
    });
  }

  public async findById(id: number): Promise<Clinic | null> {
    return Clinic.findOne({
      where: {
        id,
        status: "ACTIVE",
      },
    });
  }

  public async findByNit(nit: string): Promise<Clinic | null> {
    return Clinic.findOne({
      where: {
        nit,
        status: "ACTIVE",
      },
    });
  }

  public async create(data: CreateClinicDto): Promise<Clinic> {
    const clinic = await Clinic.create({
      name: data.name,
      nit: data.nit,
      responsibleName: data.responsibleName,
    });

    return clinic;
  }

  public async update(
    clinic: Clinic,
    data: UpdateClinicDto
  ): Promise<Clinic> {
    return clinic.update(data);
  }

  public async delete(clinic: Clinic): Promise<Clinic> {
    return clinic.update({
      status: "DELETED",
    });
  }
}