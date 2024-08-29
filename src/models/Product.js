import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";

export const Product = sequelize.define("Product", {
    
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

})

Product.sync()