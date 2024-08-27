import ProductServices from "../services/Product.services.js";

export const getProducts = async (req, res) => {
    
    try {
        const Products = await ProductServices.findAll();
        
        if(!Products){
            throw({
                statusCode: 404,
                status: "Not Found",
                message: "No se han encontrado productos"
            })
        }
        return res.json("Productos encontrados:", Products)
    } catch (error) {
        res.status(500).json({message: "No se han obtenido los productos", error})
    }
}

export const createProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
        console.log("Creando producto...")
        const ProductCreated = await ProductServices.create(req.body)
        // console.log("Producto:", ProductCreated)

        if(!ProductCreated){
            return res.json({message: "Error al crear el producto"})
        }
        res.status(201).json({message: "Producto creado con exito", ProductCreated})
    } catch (error) {
        res.status(500).json({message: "No se logró crear el producto", error})
    }
}