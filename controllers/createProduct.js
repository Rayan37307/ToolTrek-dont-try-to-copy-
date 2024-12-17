import {productModel} from "../models/productModel.js";

export const createProduct = async (req, res) => {
    const {name, image, price, description, countInStock} = req.body;
    if(!image || !price || !name || !description || !countInStock) {
        res.status(400);
        throw new Error("fill in the required fields")
    }
    // Create a new product in the database
    const product = await productModel.create({
        name,
        image,
        price,
        description,
        countInStock
    })

    res.status(201).json({ message: 'Product created successfully', product });

}