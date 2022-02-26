import Category from '../../models/category';

const getCategorieById = async(req, res) => {
    try {
        const categ = await Category.findOne({ _id: req.params.id });
        return res.json({ message: "ok", status: 200, result: categ }).status(200);
    } catch (err) {
        return res.json({ result: null, status: 500, error: err }).status(500);
    }
}

export default getCategorieById;