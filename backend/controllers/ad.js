const Ad=require('/models/ad.js');


const getad = async (req, res) => {
    try {
      const items = await Ad.find();
      mongoose.set("debug", true);
      res.status(200).json(items);
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  module.exports={
    getad
  }