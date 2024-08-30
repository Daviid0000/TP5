import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection";

export const Payment = sequelize.define("Payment", {

    cardPayment: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})