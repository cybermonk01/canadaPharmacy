import Product from "../models/product_model.js";
import multer from 'multer';
import shortid from "shortid";
import slugify from "slugify";


export const createProduct =(req,res)=>{
   
   const {name,price,description,category,quantity,createdBy}=req.body;
    // res.status(200).json({file: req.files,body: req.body});
    let productPictures= [];
if(req.files.length > 0){
    productPictures = req.files.map(file=>{
        return {img: file.filename}
    });
}

const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    description,
    quantity,
    productPictures,
    category,
    createdBy: req.user._id
    
    
});

product.save(((error,product)=>{
    if(error) return res.status(400).json({error: error});
    if(product){
        res.status(200).json({product});
    }
    
}));


}