import {
  CreateMedicineDto,
  UpdateMedicineDto,
} from "../dto/medicine.dto";
import { MedicineRepository } from "../repositories/medicine.repository";

/**
 * Contains the business logic for medicines.
 */
export class MedicineService {
  public constructor(
    public readonly medicineRepository: MedicineRepository
  ) {}

  /**
   * Returns all active medicines.
   */
  async findAll() {
    return this.medicineRepository.findAll();
  }

  /**
   * Finds a medicine by id.
   */
  async findById(id: number) {
    const medicine = await this.medicineRepository.findById(id);

    if (!medicine) {
      throw new Error("Medicine not found");
    }

    return medicine;
  }

  /**
   * Creates a medicine.
   */
  async create(data: CreateMedicineDto) {
    return this.medicineRepository.create(data);
  }

  /**
   * Updates a medicine.
   */
  async update(id: number, data: UpdateMedicineDto) {
    const medicine = await this.findById(id);

    return this.medicineRepository.update(medicine, data);
  }

  /**
   * Logically deletes a medicine.
   */
  async delete(id: number) {
    const medicine = await this.findById(id);

    await this.medicineRepository.delete(medicine);
  }
}