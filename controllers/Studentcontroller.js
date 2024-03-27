const {GET,CREATE}=require("../Router/Studentrouter");

const Studentdata=require("express").Router();

 Studentdata.get("/",GET);
 Studentdata.post("/Create",CREATE);
  
 
module.exports=Studentdata; 
 
 