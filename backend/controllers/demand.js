const Demand=require('../models/demand');

const handleDemand=async(req,res)=>{
    const {productname,demand,description,duration,returnDate,isreview}=req.body;
   try{
    const dem=await  Demand.create({
        productname,
        demand,
        description,
        duration,
        returnDate,
        isreview
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