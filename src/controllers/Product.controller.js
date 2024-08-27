import ProductServices from "../services/Product.services.js";

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
            message: "No se han obtenido los productos", 
            error: error.message
        })
    }
}

export const createProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
        console.log("Creando producto...")
        const ProductCreated = await ProductServices.create({name, price})
        console.log("Producto:", ProductCreated)

        if(!ProductCreated){
            return res.json({message: "Error al crear el producto"})
        }
        res.status(201).json({message: "Producto creado con exito", ProductCreated})
    } catch (error) {
        res.status(500).json({message: "No se logró crear el producto", error})
    }
}