import Category from '../../models/category';

const getAllCategories = async (req, res) => {
    try {
        const categ = await Category.find();
        return res.json({ result: categ, status: 200 }).status(200);
    } catch (err) {
        return res.json({ result: null, status: 500, error: err }).status(500);
    }
}

export default getAllCategories;