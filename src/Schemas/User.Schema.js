import { check } from "express-validator";

export const userSchema = [
    check("username")
    .isString().withMessage("Error: El nombre de usuario de iniciar con texto")
    .notEmpty().withMessage("Error: Nombre de usuario vacío")
    .isLength({min: 5}).withMessage("Error: Longitud mínima 5 - Longitud Máxima 15"),

    check("email")
    .notEmpty().withMessage("Error: Email vacío")
    .isEmail().withMessage("Error: El email debe tener formato @gmail - @hotmail - @outlook - o similar"),

    check("password")
    .notEmpty().withMessage("Error: Contraseña vacía"),

    check("rol")
    .notEmpty().withMessage("Error: Rol no seleccionado")
    
]