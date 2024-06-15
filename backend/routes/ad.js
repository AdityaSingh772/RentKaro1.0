const express = require("express");
const router = express.Router();
const {getad} = require('../controllers/ad');
const {search} = require('../controllers/searchController');
const {getdashboard} = require('../controllers/getdashboard');
const {deletead} = require('../controllers/delete')


// GET request to fetch items
router.get('/api/items', getad);
router.get('/api/dashboard', getdashboard);

//to delete the data user wants to delete
router.delete('/api/delete', deletead);

module.exports = router;