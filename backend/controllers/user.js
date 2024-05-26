const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const Data = require("../models/User");



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

const getData = async (req, res) => {
    try {
      const items = await Data.find();
      mongoose.set("debug", true);
      res.status(200).json(items);
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
module.exports = {
    handleSumission,
    getData,
};
