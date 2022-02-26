import Category from '../../models/category';

const updateCategory =async (req, res) => {
    try {
        const categ = await Category.update({ _id: req.params.id }, req.body);
        return res.json({ message: "ok", status: 200, result: categ }).status(200);
    } catch (err) {
        return res.json({ result: null, status: 500, error: err }).status(500);
    }
}

export default updateCategory;