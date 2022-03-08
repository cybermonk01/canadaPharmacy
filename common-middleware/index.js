import jwt from 'jsonwebtoken'

export const requireSignIn =(req,res,next)=>{
    
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user=jwt.verify(token,process.env.SECRET_KEY);
        req.user=user;
        console.log(token);
     

    }else{
  return res.status(400).json({message:"Authorization required!"})
    }
    // jwt.decode()
    next();
}


export const userMiddleware = (req,res,next)=>{
    if(req.user.role!=="user"){
        return res.status(400).json({message: 'User Access Denied!'})
    }
    next();
}
export const adminMiddleware =(req,res,next)=>{
    if(req.user.role!=="admin"){
        return res.status(400).json({message: 'Admin Access Denied!'})
    }
    next();
}