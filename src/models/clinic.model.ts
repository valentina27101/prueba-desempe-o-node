import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/database";

/**
 * Represents a clinic registered in the system.
 */
export class Clinic extends Model {
  public id!: number;
  public name!: string;
  public nit!: string;
  public responsibleName!: string;
  public status!: "ACTIVE" | "DELETED";
}

/**
 * Defines the clinics table structure.
 */
Clinic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nit: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    responsibleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("ACTIVE", "DELETED"),
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    tableName: "clinics",
    timestamps: true,
  }
);