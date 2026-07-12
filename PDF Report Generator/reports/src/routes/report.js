const express=require('express');
const router=express.Router();
const {runReport}=require('../jobs/reportJob');
router.post('/',async(req,res)=>{
 try{
  const file=await runReport();
  res.json({message:'Report generated',download:`http://localhost:3000/reports/${file}`});
 }catch(e){
  res.status(500).json({error:'Failed to generate report'});
 }
});
module.exports=router;
