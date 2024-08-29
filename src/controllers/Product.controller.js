import ProductServices from "../services/Product.service.js";

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
    const { name, price, description, stock } = req.body;

    try {
        const ProductCreated = await ProductServices.create({name, price, description, stock })

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