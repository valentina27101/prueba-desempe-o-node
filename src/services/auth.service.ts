import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { LoginDto, RegisterDto } from "../dto/auth.dto";
import { UserRepository } from "../repositories/user.repository";

/**
 * Contains authentication business logic.
 */
export class AuthService {
  public constructor(public readonly userRepository: UserRepository) {}

  /**
   * Registers a new user with a hashed password.
   * @param data Validated registration data.
   */
  async register(data: RegisterDto) {
    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new Error("Email already registered");
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    const user = await this.userRepository.create({
      email: data.email,
      passwordHash,
      role: data.role,
    });

    return {
      id: user.id,
      email: user.email,
      role: user.role,
    };
  }

  /**
   * Validates credentials and creates a JWT.
   * @param data Login credentials.
   */
  async login(data: LoginDto) {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const validPassword = await bcrypt.compare(
      data.password,
      user.passwordHash
    );

    if (!validPassword) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      env.jwtSecret,
      { expiresIn: "2h" }
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
}