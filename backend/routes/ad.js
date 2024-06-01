const express = require("express");
const router = express.Router();
const {getad} = require('../controllers/ad');
const {search} = require('../controllers/search');
const {getdashboard} = require('../controllers/getdashboard');
const {deletead} = require('../controllers/delete')


// GET request to fetch items
router.get('/api/items', getad);

//GET request to search data
router.get('/api/search', search);


//to display on the dashboard
router.get("/api/dashboard", getdashboard);


//delete user ads
router.delete('/api/delete', deletead);
  




module.exports = router;