const express = require("express");
const router = express.Router();
const {getad} = require('../controllers/ad');
const {getclient} = require('../controllers/client');

// GET request to fetch items
router.get('/api/items', getad);

router.get('/client', getclient);

module.exports = router;