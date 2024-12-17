import { productModel } from "../models/productModel.js";

export const editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, price, description, countInStock } = req.body;

  if (!id) {
    res.status(400);
    throw new Error("Product ID is required");
  }

  // Find the product by ID
  const product = await productModel.findById(id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  // Update the product
  product.name = name || product.name;
  product.image = image || product.image;
  product.price = price || product.price;
  product.description = description || product.description;
  product.countInStock = countInStock || product.countInStock;

  // Save the updated product
  await product.save();

  res.status(200).json({ message: 'Product updated successfully', product });
};