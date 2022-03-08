import express from "express";
import { adminMiddleware, requireSignIn } from "../common-middleware/index.js";

import { addCategory, getCategories } from "../controller/category_controller.js";


const router= express.Router();
import shortid from 'shortid';
import path from 'path';
import multer from 'multer';





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


router.post('/category/create',requireSignIn,adminMiddleware,upload.single('categoryImage'),addCategory)
router.get('/category/getCategory',getCategories)




export default router;