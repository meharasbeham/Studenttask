const {GET,CREATE,PUT,DELETE}=require("../Router/Studentrouter");

const Studentdata=require("express").Router();

 Studentdata.get("/",GET);
 Studentdata.post("/Create",CREATE);
 Studentdata.put("/:id",PUT); 
 Studentdata.put("/:id",DELETE); 
module.exports=Studentdata; 
 
 