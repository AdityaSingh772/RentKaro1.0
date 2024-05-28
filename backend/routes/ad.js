const express = require("express");
const router = express.Router();
const {getad} = require('../controllers/ad');
const {search} = require('../controllers/search');


// GET request to fetch items
router.get('/api/items', getad);

//GET request to search data
router.get('/api/search', search);





module.exports = router;