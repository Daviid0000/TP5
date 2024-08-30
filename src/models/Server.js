import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import { PORT } from "../config/enviroments.js";
import routerProduct from "../router/Product.routes.js";
import dbConnection from "../config/dbConnection.js";
import userRoutes from "../router/User.routes.js";

class Server {
    constructor() {
        this.app = express();
        this.PORT = PORT;

        this.dbConnect();
        
        this.middlewares();
        this.routes();
    }


    async dbConnect() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/api", routerProduct);
        this.app.use("/user", userRoutes);
    }

    listen() {
        this.app.listen(this.PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${this.PORT}`))
    }
}

export default Server;