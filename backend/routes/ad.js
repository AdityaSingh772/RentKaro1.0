const express = require("express");
const router = express.Router();
const {getad} = require('../controllers/ad');
const {search} = require('../controllers/search');
const {getdashboard} = require('../controllers/getdashboard');
const {deletead} = require('../controllers/delete')


// GET request to fetch items
router.get('/api/items', getad);

module.exports = router;