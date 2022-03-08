import mongoose from 'mongoose';
import user from './user.js';
const productSchema= new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim: true
},
slug:{
    type:String,
    required: true,
    unique: true
},
price:{
    type: Number,required:true
},
quantity:{type: Number,required:true},
description:
{type:String,required:true,trim: true},
offer:{type: Number},
productPictures: [{
    img: {type: String}

}],
reviews: [{
    userId:{type:mongoose.Schema.Types.ObjectId,
    ref: 'User'},
    review:String,
}],
category: {type:mongoose.Schema.Types.ObjectId,ref:'Category'},
createdBy: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
updatedAt: Date,



},{timestamps: true});


export default mongoose.model("Product",productSchema);