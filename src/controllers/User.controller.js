import UserService from "../services/User.service.js";

export const createUser = async (req, res) => {
    const { username, email, password, rol } = req.body;

    try {
        const emailExist = await UserService.findOne(email);

        if(emailExist){
            throw({
                statusCode: 400,
                message: "Ya existe un usuario con ese email"
            })
        }

        const userCreated = await UserService.create({username, email, password, rol});

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

export const getOneUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserService.findByPk(id);

        if(!user){
            throw({
                statusCode: 404,
                status: "Not Found",
                message: "Usuario no encontrado"
            })
        };

        res.json(user);
    } catch (error) {
        return res.status(500).json({ 
            message: "Error en el servidor", 
            error: error.message })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
        const userUpdated = await UserService.update(id, {username, email, password});

        if(!userUpdated){
            throw({
                statusCode: 400,
                message: "Usuario no actualizado"
            })
        }

        const user = await UserService.findByPk(id);

        res.json(user)
    } catch (error) {
        res.status(500).json({
           message: "Error en el servidor",
           error: error.message
        })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const userDeleted = await UserService.destroy(id);

        if(!userDeleted){
            throw({
                statusCode: 400,
                message: "Usuario no eliminado"
            })
        }

        res.json({ message: "Usuario eliminado", userDeleted })
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
            error: error.message
        })
    }
}