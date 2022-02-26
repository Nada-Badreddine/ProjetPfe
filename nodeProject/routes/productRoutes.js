import express from 'express';

import {
  addProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
  updateProduct,
  getProductByCategory
} from '../service/products';

const productRouter = express.Router();

productRouter.post('/product', addProduct);
productRouter.get('/product', getAllProducts);
productRouter.get('/product/:id', getProductById);
productRouter.get('/product/:category', getProductByCategory);
productRouter.put('/product/:id', updateProduct);
productRouter.delete('/product/:id', deleteProduct);

export default productRouter;




