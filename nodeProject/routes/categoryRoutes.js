import express from 'express';

import {
  addCategory,
  getAllCategories,
  deleteCategory,
  getCategorieById,
  updateCategory
} from '../service/category';

const categoryRouter = express.Router();

categoryRouter.post('/categories', addCategory);
categoryRouter.get('/categories', getAllCategories);
categoryRouter.get('/categories/:id', getCategorieById);
categoryRouter.put('/categories/:id', updateCategory);
categoryRouter.delete('/categories/:id', deleteCategory);

export default categoryRouter;