import { check,validationResult } from 'express-validator'

export const validateSignUpRequest = [
    check('firstName').notEmpty().withMessage('firstName is Required'),
    check('lastName').notEmpty().withMessage('lastName is Required'),
    check('email').isEmail().withMessage(' Valid email is Required'),
    check('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters long')
];

export const validateSignInRequest = [

    check('email').isEmail().withMessage(' Valid email is Required'),
    check('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters long')];
    
export const  isRequestValidated= (req,res,next)=>{
    const errors =validationResult(req);
    if(errors.array().length >0){
        return res.status(400).json({error: errors.array()[0].msg})

    }
    next();
    
}