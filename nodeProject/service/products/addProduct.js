import Product from '../../models/product';

const addProduct = async (req, res) => {

	try {
		const produit = await Product.create(req.body);
		return res.json({ result: produit, status: 200 }).status(200);
	} catch (err) {
		return res.json({ result: null, status: 500, error: err }).status(500);
	}
  } 
  export default addProduct;