import { body } from "express-validator";

export const ProductSchema = [
    body("name")
        .isString().withMessage("Error: Nombre debe ser un texto")
        .notEmpty().trim().withMessage("Error: Nombre vacío")
        .isLength({min: 5, max: 15}).withMessage("Error: Longitud mínima 5 - Longitud máxima 15"),

    body("price")
        .isNumeric().withMessage("Error: Precio debe ser numérico")
        .notEmpty().trim().withMessage("Error: Precio vacío")
        .isLength({min: 4}).withMessage("Error: Longitud minima 4")

    ]