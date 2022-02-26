import Favorite from '../../models/favorite';

const deleteFavoris = async (req, res) => {
  await Favorite.deleteOne({ProductId: req.params.id });
  return res
    .json({ message: "ok", result: req.params.id, status: 200 })
    .status(200);
}

export default deleteFavoris;