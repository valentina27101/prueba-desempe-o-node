export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "GESTOR";
}

export interface LoginDto {
  email: string;
  password: string;
}