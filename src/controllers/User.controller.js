import UserService from "../services/User.service.js";

export const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userCreated = await UserService.create({username, email, password});

        if(!userCreated) {
            throw({
                statusCode: 400,
                message: "No se pudo crear el usuario"
            })
        }

        res.status(201).json({ message: "Usuario creado", userCreated})
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message })
    }
}

export const getUsers = async (req, res) => {

    try {
        const users = await UserService.findAll();

        if(!users){
            throw({
                statusCode: 404,
                status: "Not Found",
                message: "No se han encontrado usuarios"
            })
        }

        return res.json(users)
    } catch (error) {
        res.status(500).json({ 
            message: "Error en el servidor", 
            error: error.message 
        })
    }
}