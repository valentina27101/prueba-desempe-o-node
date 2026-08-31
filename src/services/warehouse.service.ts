import {
  CreateWarehouseDto,
  UpdateWarehouseDto,
} from "../dto/warehouse.dto";
import { WarehouseRepository } from "../repositories/warehouse.repository";

/**
 * Contains the business logic for warehouses.
 */
export class WarehouseService {
  public constructor(
    public readonly warehouseRepository: WarehouseRepository
  ) {}

  /**
   * Returns all active warehouses.
   */
  async findAll() {
    return this.warehouseRepository.findAll();
  }

  /**
   * Finds a warehouse by id.
   */
  async findById(id: number) {
    const warehouse = await this.warehouseRepository.findById(id);

    if (!warehouse) {
      throw new Error("Warehouse not found");
    }

    return warehouse;
  }

  /**
   * Creates a warehouse.
   */
  async create(data: CreateWarehouseDto) {
    return this.warehouseRepository.create(data);
  }

  /**
   * Updates a warehouse.
   */
  async update(id: number, data: UpdateWarehouseDto) {
    const warehouse = await this.findById(id);

    return this.warehouseRepository.update(warehouse, data);
  }

  /**
   * Logically deletes a warehouse.
   */
  async delete(id: number) {
    const warehouse = await this.findById(id);

    await this.warehouseRepository.delete(warehouse);
  }
}