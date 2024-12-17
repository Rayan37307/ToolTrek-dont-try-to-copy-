import express from 'express';
import { createProduct } from '../controllers/createProduct.js';
import { getProducts } from '../controllers/getProduct.js';
import { editProduct } from '../controllers/editProduct.js';
import { deleteProduct } from '../controllers/removeProduct.js';
const productRouter = express.Router();

productRouter.post('/createProduct', createProduct)
productRouter.get('/getProducts', getProducts)
productRouter.patch('/editProduct/:id', editProduct)
productRouter.delete('/deleteProduct/:id', deleteProduct)

export default productRouter;