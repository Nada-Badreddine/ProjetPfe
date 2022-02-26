import Product from '../../models/product';

const deleteProduct = async (req, res) => {
    await Product.deleteOne({ _id: req.params.id });
  return res
    .json({ message: "ok", result: req.params.id, status: 200 })
    .status(200);
  
}

export default deleteProduct;