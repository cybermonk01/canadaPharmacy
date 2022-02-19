import mongoose from 'mongoose'
import express from 'express'
import Products from './models/products_model.js'
// import Cors from 'cors'
//App config
const app= express();
const port = process.env.PORT || 8001;
const connection_url= "mongodb+srv://jamesons:wm6UOMyNvEo8jOhM@cluster0.hihlu.mongodb.net/canadadb?retryWrites=true&w=majority";



//Middlewares
app.use(express.json());
// app.use(Cors());


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
