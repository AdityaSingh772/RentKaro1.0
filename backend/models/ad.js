const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    brand:{
        type:String,
        required : true,
     },
     type:{
        type:String,
        required : true,
     },
     email : {
        type:String,
        required : true,
    },

    title : {
        type:String,
        required : true,
    },
    description : {
        type:String,
        required : true,
    },
    price : {
        type:String,
        required : true,
    },
    photo : {
        type:[String],
        required : true,
    },
    college : {
        type:String,
        required : true,
    },
    phone : {
        type:String,
        required : true,
    },
    

});

const Ad = mongoose.model("adPost", adSchema);

module.exports = Ad;