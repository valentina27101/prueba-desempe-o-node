import {
  CreateSupplyRequestDto,
  UpdateSupplyRequestDto,
} from "../dto/supply-request.dto";

import { SupplyRequestRepository } from "../repositories/supply-request.repository";

/**
 * Contains the business logic for supply requests.
 */
export class SupplyRequestService {
  public constructor(
    public readonly supplyRequestRepository: SupplyRequestRepository
  ) {}

  /**
   * Returns all supply requests.
   */
  async findAll() {
    return this.supplyRequestRepository.findAll();
  }

  /**
   * Finds a supply request by id.
   */
  async findById(id: number) {
    const request = await this.supplyRequestRepository.findById(id);

    if (!request) {
      throw new Error("Supply request not found");
    }

    return request;
  }

  /**
   * Creates a supply request.
   */
  async create(data: CreateSupplyRequestDto) {
    return this.supplyRequestRepository.create(data);
  }

  /**
   * Approves or rejects a supply request.
   */
  async updateStatus(
    id: number,
    data: UpdateSupplyRequestDto
  ) {
    const request = await this.findById(id);

    return this.supplyRequestRepository.updateStatus(
      request,
      data.status
    );
  }
}