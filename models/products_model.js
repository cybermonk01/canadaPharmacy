import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name:String,
    imgUrl: String, 
},
{ versionKey: false })


export default mongoose.model('products', productSchema)