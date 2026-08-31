import { User } from "../models/user.model";

/**
 * Handles all direct database operations related to users.
 */
export class UserRepository {
  /**
   * Finds a user by email.
   */
  async findByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }

  /**
   * Finds a user by id.
   */
  async findById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  /**
   * Returns all users.
   */
  async findAll(): Promise<User[]> {
    return User.findAll({ order: [["id", "ASC"]] });
  }

  /**
   * Creates a user.
   */
  async create(data: {
    name: string,
    email: string;
    passwordHash: string;
    role: "ADMIN" | "GESTOR";
  }): Promise<User> {
    return User.create(data);
  }

  /**
   * Updates a user.
   */
  async update(user: User, data: Partial<User>): Promise<User> {
    await user.update(data);
    return user;
  }

  /**
   * Deletes a user.
   */
  async delete(user: User): Promise<void> {
    await user.destroy();
  }
}