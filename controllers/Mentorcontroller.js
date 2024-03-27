const {GET,CREATE}=require("../Router/Mentorrouter");

const Mentordata=require("express").Router();

 Mentordata.get("/",GET);
 Mentordata.post("/Create",CREATE);
 Mentordata.put("/:id",CREATE); 
 
module.exports=Mentordata; 
 