import { Router } from "express";
import { createProduct, getProducts } from "../controllers/Product.controller.js";
// import { ProductSchema } from "../Schemas/Produc.Schema.js";

const routerProduct = Router();

routerProduct.get("/", getProducts)
routerProduct.post("/", createProduct)

export default routerProduct