const { default: mongoose } = require("mongoose")
const { type } = require("os")

const clientSchema = new mongoose.Schema({
    id: {
        type: Number,
      },
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      gender: {
        type: String,
        
      },
      college: {
        type: String,
        
      },
      hostel: {
        type: String,
       
      },
      phone: {
        type: String,
        
      }
    });

const client = mongoose.model("clientData",clientSchema);

module.exports = client;