
const User = require("../models/User");




const handleSumission = async (req, res) => {
    const { college, hall, room, phone, link } = req.body;
    try {
        const response = await User.create({
            college,
            hall,
            room,
            phone,
            link,
        });
        res.status(201).json({ message: 'Form data received successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    handleSumission,
    
};
