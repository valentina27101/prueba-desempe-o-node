import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

/**
 * Representa un usuario registrado en el sistema.
 */
export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public passwordHash!: string;
    public role!: "ADMIN" | "GESTOR";
}

/**
 * Define la estructura de la tabla users en PostgreSQL.
 */
User.init(
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

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.ENUM("ADMIN", "GESTOR"),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "users",
        timestamps: true,
    }
);