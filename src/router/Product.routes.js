import { Router } from "express";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "../controllers/Product.controller.js";
import { ProductSchema } from "../Schemas/Produc.Schema.js";
import { validationErrors } from "../Schemas/validations.js";

const routerProduct = Router();

routerProduct.get("/", getProducts)
routerProduct.post("/", ProductSchema, validationErrors, createProduct)
routerProduct.get("/:id", getOneProduct)
routerProduct.put("/:id", updateProduct)
routerProduct.delete("/:id", deleteProduct)

export default routerProduct