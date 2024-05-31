const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    college:{
        type:String,
        required : true,
    },
    hall : {
        type:String,
        required : true,
    },
    room : {
        type:String,
        required : true,
    },
    phone : {
        type:String,
        required : true,
    },
    link : {
        type:String,
        required : true,
    },
});


  


const User = mongoose.model("users", userSchema);

module.exports = User;
