import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";

export const Payment = sequelize.define("Payment", {

    payment: {
        type: DataTypes.ENUM("CARD", "TRANSFER", "CASH"),
        allowNull: false,
    },
    money: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    // cardPayment: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // transferPayment:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    
    // cashPayment:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
})

Payment.sync();