import Favorite from '../../models/favorite';

const getFavorisByUserId = async(req, res) => {
    try {
     
 const listFav = await Favorite.find({ user: req.params.user}).populate("ProductId");
 console.log("listFav", listFav)
  return res.json({ message: "ok", status: 200, result: listFav }).status(200);
 
   } catch (err) {
     return res.json({ result: null, status: 500, error: err }).status(500);
	}
}

export default getFavorisByUserId;