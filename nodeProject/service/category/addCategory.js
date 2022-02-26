import Category from '../../models/category';

const addCategory = async (req, res) => {
    try {
        const categ = await Category.create(req.body);
        return res.json({ result: categ, status: 200 }).status(200);
    } catch (err) {
        return res.json({ result: null, status: 500, error: err }).status(500);
    }
}

export default addCategory;