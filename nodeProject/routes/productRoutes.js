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

productRouter.post('/products', addProduct);
productRouter.get('/products', getAllProducts);
productRouter.get('/products/:id', getProductById);
productRouter.get('/productsByCategory/:category', getProductByCategory);
productRouter.put('/products/:id', updateProduct);
productRouter.delete('/products/:id', deleteProduct);

export default productRouter;




