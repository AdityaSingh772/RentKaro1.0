const express=require('express')
const router=express.Router();
const {handleDemand}=require('../controllers/demand')
const {handleDemandlist}=require('../controllers/demandlist')

router.post('/api/demand',handleDemand);
router.get('/api/demand',handleDemandlist);
module.exports=router;