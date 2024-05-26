require('dotenv').config();
const express = require("express");
const mongoose  = require("mongoose");
const multer = require('multer');
const cors = require('cors');
const path = require("path");
const userRouter = require("./routes/user");
const Ad = require("./models/ad")
const app = express();
const adRouter = require("./routes/ad");
app.use(cors());
app.use(express.json());


//connection 
const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URL_FORM).
then(()=>{
    console.log("mongoDb connected");
});



//multer config yaha se
const storage = multer.diskStorage({
    destination: './adImages/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    }
  }).array('photos', 5); // maximum 5 image lunga
  
  // file type check karne khatir
  function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }
  app.post('/api/productadmin', (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        res.status(400).json({ message: err });
      } else {
        if (req.files == undefined) {
          res.status(400).json({ message: 'No file selected!' });
        } else {
          try {
            const photoPaths = req.files.map(file => file.path);
            const newAd = new Ad({
              brand: req.body.brand,
              title: req.body.title,
              description: req.body.description,
              price: req.body.price,
              photos: photoPaths,
              college: req.body.college,
              phone: req.body.phone,
              isReview : "pending"
            });
            const savedAd = await newAd.save();
            res.json(savedAd);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        }
      }
    });
  });


  
  app.use(express.json());
  app.use('/uploads', express.static('uploads'));








//routes yaha se

app.use('/',userRouter);

//ad ke routes yaha se
app.use("/", adRouter);


app.listen(port, ()=>{
    console.log(`The app is running at port ${port}`);
})
