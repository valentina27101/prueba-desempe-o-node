import bcrypt from "bcryptjs";
import { sequelize } from "../config/database";

import { User } from "../models/user.model";
import { Clinic } from "../models/clinic.model";
import { Warehouse } from "../models/warehouse.model";
import { Medicine } from "../models/medicine.model";

import users from "./data/users.json";
import clinics from "./data/clinics.json";
import warehouses from "./data/warehouses.json";
import medicines from "./data/medicine.json";

/**
 * Loads test data from JSON files into the database.
 */
async function seed() {
  try {
    // Connect to PostgreSQL.
    await sequelize.authenticate();

    console.log("Database connected.");

    // Create users.
    for (const user of users) {
      // Encrypt the password before saving it.
      const passwordHash = await bcrypt.hash(user.password, 10);

      await User.findOrCreate({
        where: {
          email: user.email,
        },
        defaults: {
          name: user.name,
          email: user.email,
          passwordHash,
          role: user.role,
        },
      });
    }

    console.log("Users loaded.");

    // Create clinics.
    for (const clinic of clinics) {
      await Clinic.findOrCreate({
        where: {
          nit: clinic.nit,
        },
        defaults: {
          name: clinic.name,
          nit: clinic.nit,
          responsibleName: clinic.responsibleName,
        },
      });
    }

    console.log("Clinics loaded.");

    // Create warehouses.
    for (const warehouse of warehouses) {
      await Warehouse.findOrCreate({
        where: {
          name: warehouse.name,
        },
        defaults: {
          name: warehouse.name,
          location: warehouse.location,
        },
      });
    }

    console.log("Warehouses loaded.");

    // Create medicines.
    for (const medicine of medicines) {
      await Medicine.findOrCreate({
        where: {
          name: medicine.name,
        },
        defaults: {
          name: medicine.name,
          description: medicine.description,
          stock: medicine.stock,
          minimumStock: medicine.minimumStock,
          status: medicine.status,
        },
      });
    }

    console.log("Medicines loaded.");
    console.log("Seed completed successfully.");

    // Close the database connection.
    await sequelize.close();
  } catch (error) {
    console.error("Error running seed:", error);

    // Close the database connection if an error occurs.
    await sequelize.close();

    process.exit(1);
  }
}

// Execute the seed.
seed();

