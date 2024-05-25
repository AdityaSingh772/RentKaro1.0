const mongoose = require("mongoose");
const { type } = require("os");
const { emitWarning } = require("process");
const { ModuleResolutionKind } = require("typescript");

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

const dataSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    review: {
      type: Number,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  });
  

const Data = mongoose.model("Data", dataSchema);

const User = mongoose.model("users", userSchema);

module.exports = User;
module.exports = Data;