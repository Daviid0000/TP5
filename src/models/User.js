import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";

export const User = sequelize.define("User", {

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('ADMIN', 'COMPRADOR', 'VENDEDOR'),
        allowNull: false,
        defaultValue: 'COMPRADOR'

    }
});

User.sync();