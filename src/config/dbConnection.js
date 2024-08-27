import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("dbTest", "root", "", {
    host: "localhost",
    dialect: "mysql"
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