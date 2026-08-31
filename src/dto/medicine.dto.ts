/**
 * Data required to create a medicine.
 */
export interface CreateMedicineDto {
  name: string;
  description: string;
  stock: number;
  minimumStock: number;
}

/**
 * Data allowed when updating a medicine.
 */
export interface UpdateMedicineDto {
  name?: string;
  description?: string;
  stock?: number;
  minimumStock?: number;
}