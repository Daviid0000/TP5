import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";

export const Product = sequelize.define("Product", {
    seller: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false    
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    buys: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }

})

Product.sync()