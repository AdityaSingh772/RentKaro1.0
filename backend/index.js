require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const userRouter = require('./routes/user');
const adRouter = require('./routes/ad');
const demandRouter = require('./routes/demand');
const clientRouter = require('./routes/client');
const Ad = require('./models/ad');
const app = express();

app.use(cors());
app.use(express.json());

// Log environment variable to verify it's loaded correctly
console.log('MongoDB URL:', process.env.MONGO_URL_FORM);

// Connection
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL_FORM;

if (!mongoUrl) {
  throw new Error('MONGO_URL_FORM environment variable is not set');
}

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error: ', err);
  });

// Multer config
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
}).array('photos', 5); // maximum 5 images

// File type check
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

// Upload endpoint
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
            photo: "http://dummyimage.com/132x100.png/ff4444/ffffff",
            college: req.body.college,
            phone: req.body.phone,
            isReview: "pending"
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

// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/', userRouter);
app.use('/', adRouter);
app.use('/', demandRouter);
app.use('/', clientRouter);

// Start the server
app.listen(port, () => {
  console.log(`The app is running at port ${port}`);
});
