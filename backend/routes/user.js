const express = require("express");
const router = express.Router();
const { handleSumission, getData } = require('../controllers/user');




//POST request to handle form submission
router.post('/submit', handleSumission);

module.exports = router;

