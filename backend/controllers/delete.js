const Ad=require('../models/ad');


const deletead = async(req, res) => {
    const { id, email } = req.body;
  
    // Find and delete the product
    const product = await Ad.findOne({ id: id, email:email});
    if(product){
        await product.deleteOne();
        res.status(200).send({ message: 'Product deleted successfully' });

    }
      
    else {
      res.status(404).send({ message: 'Product not found' });
    }
  }
  
  module.exports={
    deletead
  }