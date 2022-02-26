import express from 'express';

import {
  addFavoris,
  getAllFavoris,
  deleteFavoris,
  getFavorisByUserId
} from '../service/favoris';

const favorisRouter = express.Router();

favorisRouter.post('/favorite', addFavoris);
favorisRouter.get('/favoriteList', getAllFavoris);
favorisRouter.get('/listFavoris/:user', getFavorisByUserId);
favorisRouter.delete('/Favproduct/:id', deleteFavoris);

export default favorisRouter;



