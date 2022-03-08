import express from "express";
import { adminMiddleware, requireSignIn } from "../common-middleware/index.js";
import {createProduct} from '../controller/product_controller.js'
import multer from 'multer';
// import { addCategory, getCategories } from "../controller/category_controller.js";
import shortid from 'shortid';
import path from 'path';



const router= express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'uploadss')
        
        
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})
const upload = multer({storage});
  


router.post('/product/create',requireSignIn,adminMiddleware,upload.array('productPicture'),createProduct);

// router.get('/category/getCategory',getCategories)




export default router;