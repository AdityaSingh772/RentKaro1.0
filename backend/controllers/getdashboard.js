const Ad=require('../models/ad');


const getdashboard = async (req, res) => {
    try {
      const email = req.query.email;
      const items = await Ad.find({ email: email });
      res.status(200).json(items);
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  module.exports={
    getdashboard
  }

 