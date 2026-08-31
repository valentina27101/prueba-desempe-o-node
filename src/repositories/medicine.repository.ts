import { Medicine } from "../models/medicine.model";

/**
 * Handles database operations related to medicines.
 */
export class MedicineRepository {
  /**
   * Returns all active medicines.
   */
  async findAll(): Promise<Medicine[]> {
    return Medicine.findAll({
      where: { status: "ACTIVE" },
      order: [["id", "ASC"]],
    });
  }

  /**
   * Finds an active medicine by id.
   */
  async findById(id: number): Promise<Medicine | null> {
    return Medicine.findOne({
      where: {
        id,
        status: "ACTIVE",
      },
    });
  }

  /**
   * Creates a medicine.
   */
  async create(data: {
    name: string;
    description: string;
    stock: number;
    minimumStock: number;
  }): Promise<Medicine> {
    return Medicine.create(data);
  }

  /**
   * Updates a medicine.
   */
  async update(
    medicine: Medicine,
    data: {
      name?: string;
      description?: string;
      stock?: number;
      minimumStock?: number;
    }
  ): Promise<Medicine> {
    await medicine.update(data);
    return medicine;
  }

  /**
   * Performs a logical deletion.
   */
  async delete(medicine: Medicine): Promise<void> {
    await medicine.update({
      status: "DELETED",
    });
  }
}