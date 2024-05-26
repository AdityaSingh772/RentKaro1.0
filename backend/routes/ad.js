const express = require("express");
const router = express.Router();
const {  getad} = require('../controllers/ad');


// GET request to fetch items
router.get('/api/items', async (req, res, next) => {
    try {
        const response = await getad(req, res);
        console.log(response); // Console Log the response data
    } catch (error) {
        next(error);
    }
});