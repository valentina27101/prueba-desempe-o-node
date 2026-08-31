import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

/**
 * Represents a supply request made by a clinic.
 */
export class SupplyRequest extends Model {
  public id!: number;
  public clinicId!: number;
  public medicineId!: number;
  public quantity!: number;
  public status!: "PENDING" | "APPROVED" | "REJECTED";
}

/**
 * Defines the structure of the supply requests table.
 */
SupplyRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    clinicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    medicineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("PENDING", "APPROVED", "REJECTED"),
      allowNull: false,
      defaultValue: "PENDING",
    },
  },
  {
    sequelize,
    tableName: "supply_requests",
    timestamps: true,
  }
);