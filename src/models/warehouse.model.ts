import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/database";

/**
 * Represents a warehouse that stores medicines.
 */
export class Warehouse extends Model {
  public id!: number;
  public name!: string;
  public location!: string;
  public status!: "ACTIVE" | "DELETED";
}

/**
 * Defines the structure of the warehouses table.
 */
Warehouse.init(
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

    location: {
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
    tableName: "warehouses",
    timestamps: true,
  }
);