import ProductServices from "../services/Product.service.js";
import UserService from "../services/User.service.js";
import { Payment } from "../models/Payment.js";
export const getProducts = async (req, res) => {
    
    try {
        const products = await ProductServices.findAll();
        
        if(!products){
            throw({
                statusCode: 404,
                status: "Not Found",
                message: "No se han encontrado productos"
            })
        }

        return res.json(products)
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor", 
            error: error.message
        })
    }
}

export const createProduct = async (req, res) => {
    const { seller, name, price, description, stock } = req.body;

    try {
        const userExist = await UserService.findOne(seller);

        console.log("usuario:", userExist)


        if(!userExist){
            throw({
                statusCode: 404,
                status: "Not Found",
                message: "Usuario no autenticado para vender productos"
            })
        }

        if(userExist.rol !== "VENDEDOR"){
            throw({
                statusCode: 400,
                message: "No cumple con el rol para crear productos"
            })
        }

        const ProductCreated = await ProductServices.create({ seller, name, price, description, stock })

        if(!ProductCreated){
            return res.json({message: "Error al crear el producto"})
        }
        res.status(201).json({message: "Producto creado con exito", ProductCreated})
    } catch (error) {
        res.status(500).json({message: "No se logró crear el producto", error})
    }
}

export const getOneProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const getProduct = await ProductServices.findByPk(id);

        if(!getProduct) {
            throw({
                statusCode: 404,
                status: "Not Found",
                message: "No se ha encontrado el producto"
            })
        }

        res.json(getProduct)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message})
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    
    try {

        const updatedProduct = await ProductServices.update(id, {name, price})
        console.log("actualizacion:",updatedProduct)
        if(!updatedProduct) {
            throw({
                statusCode: 400,
                message: "Error al tratar de actualizar el producto"
            })
        }

        const getProduct = await ProductServices.findByPk(id)

        return res.json({ message: "Producto actualizado", getProduct})
        
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    
    const { id } = req.params;

    try {
        
        const deletedProduct = await ProductServices.destroy(id);
        console.log("delete:", deletedProduct)
        if(!deletedProduct) {
            throw({
                statusCode: 400,
                message: "No se pudo eliminar el producto"
            })
        }

        return res.json({ message: "Producto eliminado" })

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message })
    }
}

export const buyProduct = async (req, res) => {
    const { id } = req.params;
    const { buys, email, money, payment } = req.body;

    try {
        const userExist = await UserService.findOne(email);

        if(!userExist){
            throw({
                statusCode: 404,
                status: "Not Found",
                message: "Inicia sesión para comprar"
            })
        };

        if(userExist.rol !== "CLIENTE"){
            throw({
                statusCode: 400,
                message: "No cumple con el rol para comprar un producto"
            })
        };

        const producto = await ProductServices.findByPk(id);

        if(!producto || (producto.stock <= 0)){
            throw({
                statusCode: 404,
                status: "Not Found",
                message: "Ya no existe este producto"
            });
        };

        if(payment !== "CARD"){
            if(payment !== "TRANSFER"){
                if(payment !== "CASH"){
                    throw({
                        statusCode: 400,
                        message: "Elija un medio de pago como 'CARD', 'TRANSFER' o 'CASH'"
                    });
                };
            };
        };

        console.log("A elegido el medio de pago:", payment);

        const total = buys*producto.price;

        console.log("Pago total:", total)
        console.log("Dinero de cliente: ", money)

        if(!(money === total)){
            throw({
                statusCode: 400,
                message: "Dinero insuficiente"
            })
        };

        producto.update({
            stock: producto.stock - buys, 
            buys: producto.buys + buys
        });

        return res.json({ message: "Producto comprado"});
        
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
            error: error.message
        })
    }
}