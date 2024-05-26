const mongoose = require("mongoose");



const adSchema = new mongoose.Schema({
    brand:{
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