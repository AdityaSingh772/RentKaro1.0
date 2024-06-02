const mongoose=require('mongoose')
const { describe } = require('node:test')

const demandSchema=new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    demand:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    duration:{
        type:Number,
        required:true
    },
    returnDate:{
        type:Date,
        required:true

    },
    isreview:{
        type: String,
        default: "pending"
    },
    price:{
        type:Number,
        required:true
    }
})
const Demand=mongoose.model("demand",demandSchema);
module.exports=Demand