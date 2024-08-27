import { Product } from "../models/Product.js"

class ProductServices {
    constructor() { }

    async findAll() {
        return await Product.findAll();
    }

    async create(product) {
        return await Product.create(product);
    }
}

export default new ProductServices();