import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";

export const Product = sequelize.define("Product", {
    
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

// Product.sync()