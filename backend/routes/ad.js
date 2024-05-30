const express = require("express");
const router = express.Router();
const {getad} = require('../controllers/ad');
const {search} = require('../controllers/search');
const {getdashboard} = require('../controllers/getdashboard');


// GET request to fetch items
router.get('/api/items', getad);

//GET request to search data
router.get('/api/search', search);


//to display on the dashboard
router.get("/api/dashboard", getdashboard);





module.exports = router;