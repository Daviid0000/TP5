import { Product } from "../models/Product.js"

class ProductServices {
    constructor() { }

    async findAll() {
        return await Product.findAll();
    }

    async create(product) {
        return await Product.create(product);
    }

    async findByPk(id) {
        return await Product.findByPk(id)
    }

    async update(id, product){
        return await Product.update(id, product)
    }

    async destroy(id) {
        return await Product.destroy(id)
    }
}

export default new ProductServices();