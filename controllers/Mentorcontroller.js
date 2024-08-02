const {GET,CREATE,PUT}=require("../Router/Mentorrouter");


const Mentordata=require("express").Router();

 Mentordata.get("/",GET);
 Mentordata.post("/Create",CREATE);
 Mentordata.put("/:id",PUT); 
 
module.exports=Mentordata; 
 