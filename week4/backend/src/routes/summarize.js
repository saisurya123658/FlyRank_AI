const express=require("express");

const router=express.Router();

const ai=require("../ai/ai");

const SummarySchema=require("../ai/schema");

router.post("/",async(req,res)=>{

try{

const result=await ai.summarize(req.body.text);

const parsed=SummarySchema.parse(

JSON.parse(result.text)

);

console.log(result.usage);

res.json(parsed);

}

catch(e){

res.status(500).json({

error:"Model output invalid"

});

}

});

module.exports=router;
