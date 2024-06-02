const Demand = require('../models/demand');

// Controller function to get the list of demands
const handleDemandlist = async (req, res) => {
    try {
        // Retrieve all demands from the database
        const demands = await Demand.find({});
        
        // Send the demands as the response
        res.status(200).json(demands);
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ message: 'An error occurred while retrieving demands', error: error.message });
    }
};

module.exports = { handleDemandlist };
