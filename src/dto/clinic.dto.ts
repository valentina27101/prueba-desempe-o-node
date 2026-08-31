/**
 * Data required to create a clinic.
 */
export interface CreateClinicDto {
  name: string;
  nit: string;
  responsibleName: string;
}

/**
 * Data allowed to update a clinic.
 */
export interface UpdateClinicDto {
  name?: string;
  nit?: string;
  responsibleName?: string;
}