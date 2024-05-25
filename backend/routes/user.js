const express = require("express");
const router = express.Router();
const {handleSumission} = require('../controllers/user')

//http://localhost:5000/submit
router.post("/submit", handleSumission);


module.exports = router;