import express from "express";
import { userMiddleware, requireSignIn } from "../common-middleware/index.js";

import { addItemToCart } from "../controller/cart_controller.js";


const router= express.Router();


router.post('/user/cart/addtocart',requireSignIn,userMiddleware,addItemToCart);
// router.get('/category/getCategory',getCategories)




export default router;