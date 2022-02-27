


import Product from '../../models/product';

const getProductByCategory = async(req, res) => {
  try {
 const produit = await Product.find({ category: req.params.category}).populate('category');
 
  return res.json({ message: "ok", status: 200, result: produit }).status(200);
 
   } catch (err) {
     return res.json({ result: null, status: 500, error: err }).status(500);
	}
}

export default getProductByCategory;



