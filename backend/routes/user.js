const express = require("express");
const router = express.Router();
const { handleSumission, getData } = require('../controllers/user');
const {contactMess} = require('../controllers/message.js');




//POST request to handle form submission
router.post('/submit', handleSumission);

//POST request jo bhi contact us page par contact karega, uska data lene ke liye
router.post('/api/contact-message' , contactMess);

module.exports = router;

