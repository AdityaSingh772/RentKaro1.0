const express = require("express");
const router = express.Router();
const {getad} = require('../controllers/ad');


// GET request to fetch items
router.get('/api/items', getad);

module.exports = router;