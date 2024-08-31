import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
})

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión a la base de datos exitosa")
    } catch (error) {
        console.log("No se logró la conexión a la base de datos", error)
    }
}

export default dbConnection;