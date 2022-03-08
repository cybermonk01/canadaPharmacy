import express from 'express'
import {signin, signUp} from '../../controller/auth_controller.js'
import { isRequestValidated, validateSignInRequest, validateSignUpRequest } from '../../validators/auth.js';
import {requireSignIn} from '../../common-middleware/index.js'
import { signout } from '../../controller/admin/auth_controller.js';

const router= express.Router();


router.post('/admin/signin',validateSignInRequest,isRequestValidated,signin)
router.post('/admin/signUp',validateSignUpRequest,isRequestValidated,signUp)
router.post('/admin/signout',signout)

// router.post('/profile',requireSignIn,(req,res)=>{
//     res.status(200).json({user: 'profile'})
// });


export default router;