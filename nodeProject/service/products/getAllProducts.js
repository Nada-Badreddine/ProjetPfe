import Product from '../../models/product';

const getAllProducts = async (req, res) => {
   try{
    const produit = await Product.find();
    return res.json({ result: produit, status: 200 }).status(200);

  } 
  catch (err)
  {
    return res.json({ result: null, status: 500, error: err }).status(500);
  }
}

export default getAllProducts;