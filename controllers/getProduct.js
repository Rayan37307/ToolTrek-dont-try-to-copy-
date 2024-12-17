import { productModel } from "../models/productModel.js"

export const getProducts = async (req, res) => {
    const products = await productModel.find()
    res.json({ products })
}