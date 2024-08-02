const express=require("express");
const http=express();
const cors=require("cors");
const bodyparser=require("body-parser");
const {connectToDatabase}=require("./Database/data");
const PORT=9000;

connectToDatabase();
http.use(cors()),
http.use(express.json()),
http.use(bodyparser.json()),

http.use('/Mentor',require("./controllers/Mentorcontroller"));
http.use('/Student',require("./controllers/Studentcontroller"));


http.listen (PORT,()=>{
    console.log("starting...9000");
});
