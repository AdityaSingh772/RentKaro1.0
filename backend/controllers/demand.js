const Demand=require('../models/demand');

const handleDemand=async(req,res)=>{
    const {productname,demand,description,duration,returnDate,isreview,price}=req.body;
   try{
    const dem=await  Demand.create({
        productname,
        demand,
        description,
        duration,
        returnDate,
        isreview,
        price
    })
    res.status(201).json({ message: 'Form data received successfully' });
    
   }
   catch (error) {
        console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal server error" });
    }
}
module.exports={
    handleDemand
}