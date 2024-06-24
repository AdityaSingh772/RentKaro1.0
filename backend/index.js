require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user');
const adRouter = require('./routes/ad');
const demandRouter = require('./routes/demand');
const clientRouter = require('./routes/client');
const Ad = require('./models/ad');
const searchRoutes = require('./routes/searchRoutes');
const cloudinary = require('cloudinary').v2;
const app = express();

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors());
app.use(express.json());


//connection 
const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI).
then(()=>{
    console.log("mongoDb connected");
});




  
  app.post('/api/productadmin', async (req, res) => {
    try {
      const { brand, type, email, title, description, price, photos, college, phone } = req.body;
  
      const id = await Ad.countDocuments() + 1;
      const newAd = new Ad({
        id: id,
        brand: brand,
        type: type,
        email: email,
        title: title,
        description: description,
        price: price,
        photos: photos,
        college: college,
        phone: phone,
        isReview: "pending"
      });
  
      const savedAd = await newAd.save();
      res.json(savedAd);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  
  app.use(express.json());
  // app.use('/uploads', express.static('uploads'));








//routes yaha se

app.use('/',userRouter);

//ad ke routes yaha se
app.use("/", adRouter);

app.use("/", searchRoutes);

app.use('/', demandRouter);
app.use('/', clientRouter);


app.listen(port, ()=>{
    console.log(`The app is running at port ${port}`);
})
