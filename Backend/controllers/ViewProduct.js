import AddProductModel from "../models/AddProductModel.js";
import { ObjectId } from 'mongodb'
export const ViewProductsController = async (req, res) => {
  AddProductModel.find({}, (err, products) => {
    if (err) {
      res.send(err);
    }
    res.send(products);
  });
};

// export const UpdateProduct= async (req,res)=>{
//   if(!req.body){
//     res.status(400).send({message:"data is empty"})
//   }
//   AddProductModel.find().then(products=>{
//     res.send(products)
//   }).catch(err=>{
//     res.status(500).send({message : " cannot get product details //error"})
//   })

// }

export const ViewCategory = async (req, res) => {
  // AddProductModel.find({productCategory},(err,category)=>{
  //   if (err) {
  //     res.send(err);
  //   }
  //   res.send(products);
  // })
  AddProductModel.distinct('productCategory', (err, category) => {
    if (err) {
      res.send(err);
    }
    res.send(category);
  });
}

export const ViewSingleProduct = async (req, res) => {
  const id=req.params.id;
  AddProductModel.findById(id, (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
      res.send(data)
    }
  })  
}
export const UpdateProduct = async (req, res) => {
  const newProduct = req.body.newProduct;
  const id = req.body.id;
  try {
    await AddProductModel.findById(id, (error, productToUpdate) => {
      productToUpdate.productName = newProduct;
      productToUpdate.save();
    });
  } catch (error) {
    console.log(error);
  }
  res.send("updated");
};
/* 
app.put('/update/:id', async (req, res) => {
  const { userName, password, userType, userToken } = req.body;
  const { id } = req.params;
  try {
    const updatedUser = {
      userName, password, userType, userToken, _id: id,
    }
    await UsersModel.findByIdAndUpdate(id, updatedUser, { new: true });
    res.json(updatedUser);
  } catch (err) {
    console.log(err);
  }
});
*/
export const Deleteproduct = async (req, res) => {
  const id = req.params.id;
  await AddProductModel.findByIdAndRemove(id).exec();
  res.send("item removed")

}