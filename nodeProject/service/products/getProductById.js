import Product from '../../models/product';

const getProductById = async(req, res) => {
  try {
  const produit = await Product.findOne({ _id: req.params.id });

  return res.json({ message: "ok", status: 200, result: produit }).status(200);
   } catch (err) {
     return res.json({ result: null, status: 500, error: err }).status(500);
	}
}

export default getProductById;