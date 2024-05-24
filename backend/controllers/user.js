const User = require("../models/User");

const handleSumission = async(req, res)=>{
    const {college, hall, room, phone, link}= req.body;
    const response = await User.create({
        college,
        hall,
        room,
        phone,
        link,
    });
    res.status(201).json({ message: 'Form data received successfully' });
    
}

module.exports = {
    handleSumission,
}