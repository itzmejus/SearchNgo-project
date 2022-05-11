import AddProductModel from '../models/AddProductModel.js';

export const EditCategoryController = async (req, res) => {
    const newCategoryName = req.body.newCategoryName;
    const id = req.body.id;
    try {
        await AddProductModel.findById(id, (error, categoryToUpdate) => {
            categoryToUpdate.productCategory = newCategoryName;
            categoryToUpdate.save();
        })

    } catch (error) {
        res.status(500).json({ message: "something went wrong" });

    }
    res.send("updated")
} 