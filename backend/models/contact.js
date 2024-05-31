const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String, 
        required:true,

    },
    message:{
        type:String,
        required:true,
    },
});

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;