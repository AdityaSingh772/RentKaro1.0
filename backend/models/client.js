const { default: mongoose } = require("mongoose")
const { type } = require("os")

const clientSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true
      },
      college: {
        type: String,
        required: true
      },
      hostel: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      }
    });

const client = mongoose.model("clientData",clientSchema);

module.exports = client;