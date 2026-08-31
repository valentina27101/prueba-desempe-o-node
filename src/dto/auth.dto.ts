export interface RegisterDto {
  email: string;
  password: string;
  role: "ADMIN" | "GESTOR";
}

export interface LoginDto {
  email: string;
  password: string;
}