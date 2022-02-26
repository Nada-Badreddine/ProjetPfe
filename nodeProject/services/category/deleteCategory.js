import Category from '../../models/category';

const deleteCategory = async (req, res) => {
    await Category.deleteOne({ _id: req.params.id });
    return res
      .json({ message: "ok", result: req.params.id, status: 200 })
      .status(200);
}

export default deleteCategory;