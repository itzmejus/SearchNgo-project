import AddProductModel from '../models/AddProductModel.js';



export const AddProductController=  async (req, res) => {

    try {
        const productId = req.body.productId;
        const productCategory = req.body.productCategory;
        const productName = req.body.productName;
        const productDescription = req.body.productDescription;
      
        const product = new AddProductModel({
          productId: productId,
          productCategory: productCategory,
          productName: productName,
          productDescription: productDescription,
        });
      
        await product.save();
        res.send("data saved");
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
   
  }