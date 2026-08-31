/**
 * Data required to create a warehouse.
 */
export interface CreateWarehouseDto {
  name: string;
  location: string;
}

/**
 * Data allowed when updating a warehouse.
 */
export interface UpdateWarehouseDto {
  name?: string;
  location?: string;
}