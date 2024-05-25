const express = require("express");
const mongoose  = require("mongoose");
const User = require("./models/User");
const cors = require('cors');
const router = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());




mongoose.connect("mongodb+srv://workwithracian:password1234@cluster0.ubqgpnk.mongodb.net/form").
then(()=>{
    console.log("mongoDb connected");
});


app.use('/',router);




app.listen(5000, ()=>{
    console.log("The app is running at port 5000");
})
