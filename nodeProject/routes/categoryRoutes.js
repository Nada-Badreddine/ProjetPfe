import express from 'express';

import {
  addCategory,
  getAllCategories,
  deleteCategory,
  getCategorieById,
  updateCategory
} from '../service/category';

const categoryRouter = express.Router();

categoryRouter.post('/category', addCategory);
categoryRouter.get('/category', getAllCategories);
categoryRouter.get('/category/:id', getCategorieById);
categoryRouter.put('/category/:id', updateCategory);
categoryRouter.delete('/category/:id', deleteCategory);

export default categoryRouter;