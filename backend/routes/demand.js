const express=require('express')
const router=express.Router();
const {handleDemand}=require('../controllers/demand')

router.post('/api/demand',handleDemand);
module.exports=router;