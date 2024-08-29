import { Router } from "express";
import { createUser, getUsers } from "../controllers/User.controller.js";

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.get("/", getUsers);
// userRoutes.get("/", createUser);
// userRoutes.put("/", createUser);
// userRoutes.delete("/", createUser);

export default userRoutes;