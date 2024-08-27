import { body } from "express-validator";

export const ProductSchema = () => {
    body("name")
        .notEmpty().trim()
        .isString()
        .isLength({min: 5})

    body("price")
        .notEmpty().trim()
        .isNumeric()
        .isLength({min: 4})
    }