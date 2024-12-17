import { productModel } from "../models/productModel.js";

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  // Validate the product ID
  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    // Attempt to delete the product by ID
    const product = await productModel.findByIdAndDelete(id);

    // Check if the product was found and deleted
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Respond with success message
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};