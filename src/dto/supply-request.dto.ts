/**
 * Data required to create a supply request.
 */
export interface CreateSupplyRequestDto {
  clinicId: number;
  medicineId: number;
  quantity: number;
}

/**
 * Data allowed when updating a request status.
 */
export interface UpdateSupplyRequestDto {
  status: "APPROVED" | "REJECTED";
}