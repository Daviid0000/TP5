import { Router } from "express";
import { createUser, deleteUser, getOneUser, getUsers, updateUser } from "../controllers/User.controller.js";
import { userSchema } from "../Schemas/User.Schema.js";
import { validationErrors } from "../Schemas/validations.js";

const userRoutes = Router();

userRoutes.post("/", userSchema, validationErrors ,createUser);
userRoutes.get("/", getUsers);
userRoutes.get("/:id", getOneUser);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;