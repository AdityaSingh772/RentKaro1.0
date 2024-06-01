const express = require("express");
const router = express.Router();
const {getclient} = require('../controllers/client.js');


// GET request to fetch items
router.get('/api/clients', getclient);
res.send(getclient);


module.exports = router;