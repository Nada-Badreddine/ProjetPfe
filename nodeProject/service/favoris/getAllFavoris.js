import Favorite from '../../models/favorite';

const getAllFavoris = async (req, res) => {
  try{
    const Favoris = await Favorite.find();

    return res.json({ result: Favoris, status: 200 }).status(200);

  } catch (err){
    return res.json({ result: null, status: 500, error: err }).status(500);

  }
}

export default getAllFavoris;