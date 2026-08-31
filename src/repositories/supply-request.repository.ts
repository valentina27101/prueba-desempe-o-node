import { SupplyRequest } from "../models/supply-request.model";

/**
 * Handles database operations related to supply requests.
 */
export class SupplyRequestRepository {
  /**
   * Returns all supply requests.
   */
  async findAll(): Promise<SupplyRequest[]> {
    return SupplyRequest.findAll({
      order: [["id", "ASC"]],
    });
  }

  /**
   * Finds a supply request by id.
   */
  async findById(id: number): Promise<SupplyRequest | null> {
    return SupplyRequest.findByPk(id);
  }

  /**
   * Creates a supply request.
   */
  async create(data: {
    clinicId: number;
    medicineId: number;
    quantity: number;
  }): Promise<SupplyRequest> {
    return SupplyRequest.create(data);
  }

  /**
   * Updates the status of a supply request.
   */
  async updateStatus(
    request: SupplyRequest,
    status: "APPROVED" | "REJECTED"
  ): Promise<SupplyRequest> {
    await request.update({ status });

    return request;
  }
}