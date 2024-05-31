const express = require("express");
const router = express.Router();
const {getclient} = require('../controllers/client.js');


// GET request to fetch items
router.get('/api/items', getclient);


module.exports = router;