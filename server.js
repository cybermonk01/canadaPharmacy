import mongoose from 'mongoose'
import env from 'dotenv';
import express from 'express'
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js '
import categoryRoutes from './routes/category_routes.js '
import adminRoutes from './routes/admin/auth.js '
import productRoutes from './routes/product_route.js '
import cartRoutes from './routes/cart_routes.js '
import path from 'path';
import cors from 'cors';

// import Cors from 'cors'
//App config
env.config();
const app= express();
const port = process.env.PORT || 8001;
const connection_url= `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.hihlu.mongodb.net/canadadb?retryWrites=true&w=majority`;



//Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/public',express.static('uploadss'))
// app.use(Cors());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);


//DB config

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})



//API endpoints
app.get("/",(req, res) =>res.sendStatus(200).send("Hello jamesons"));

app.post("/categories/products",(req, res) =>{
const productCard = req.body;

Products.create(productCard,(err,data)=>{
if(err){
    res.send(err)
}else{
    res.send(data);
}

})
});

app.get("/categories/products",(req,res)=>{
    Products.find((err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
});


//Listener
app.listen(port, ()=>console.log(`listening on localhost: ${port}`))
