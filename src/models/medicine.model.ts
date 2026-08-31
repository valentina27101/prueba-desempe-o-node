import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

/**
 * Represents a medicine available in the system.
 */
export class Medicine extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public stock!: number;
  public minimumStock!: number;
  public status!: "ACTIVE" | "DELETED";
}

/**
 * Defines the structure of the medicines table.
 */
Medicine.init(
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

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    minimumStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    status: {
      type: DataTypes.ENUM("ACTIVE", "DELETED"),
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    tableName: "medicines",
    timestamps: true,
  }
); 