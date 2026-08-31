import { Warehouse } from "../models/warehouse.model";

/**
 * Handles database operations related to warehouses.
 */
export class WarehouseRepository {
  /**
   * Returns all active warehouses.
   */
  async findAll(): Promise<Warehouse[]> {
    return Warehouse.findAll({
      where: { status: "ACTIVE" },
      order: [["id", "ASC"]],
    });
  }

  /**
   * Finds an active warehouse by id.
   */
  async findById(id: number): Promise<Warehouse | null> {
    return Warehouse.findOne({
      where: {
        id,
        status: "ACTIVE",
      },
    });
  }

  /**
   * Creates a warehouse.
   */
  async create(data: {
    name: string;
    location: string;
  }): Promise<Warehouse> {
    return Warehouse.create(data);
  }

  /**
   * Updates a warehouse.
   */
  async update(
    warehouse: Warehouse,
    data: {
      name?: string;
      location?: string;
    }
  ): Promise<Warehouse> {
    await warehouse.update(data);
    return warehouse;
  }

  /**
   * Performs a logical deletion.
   */
  async delete(warehouse: Warehouse): Promise<void> {
    await warehouse.update({
      status: "DELETED",
    });
  }
}