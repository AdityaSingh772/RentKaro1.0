const express = require("express");
const router = express.Router();
const { handleSumission, getData } = require('../controllers/user');

// GET request to fetch items
router.get('/api/items', async (req, res, next) => {
    try {
        const response = await getData(req, res);
        console.log(response); // Log the response data
    } catch (error) {
        next(error);
    }
});

// POST request to handle form submission
router.post('/submit', handleSumission);

module.exports = router;

