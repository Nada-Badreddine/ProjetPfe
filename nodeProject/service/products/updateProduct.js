import Product from '../../models/product';

const updateProduct =async (req, res) => {
   try {
   const produit = await Product.update({ _id: req.params.id}, req.body );
  return res.json({ message: "ok", status: 200, result: produit  }).status(200);
  } catch (err) {
    	return res.json({ result: null, status: 500, error: err }).status(500);
	}
}

export default updateProduct;