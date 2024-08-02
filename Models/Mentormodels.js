const {default:mongoose}=require("mongoose");

const MentorsSchema=mongoose.Schema({
    Coordinetor:{
        type:String,
     
    },
    MentorName:{
        type:String,
            require:true,

    },
    
    Mentorsubject:{
        type:String,
            require:true,

    },
    studentsName:{
        type:String,
        require:true,

    },
    Studentid:{
        type:String,
        require:true,
   
    },
    
    PrivewsMentorName:{
        type:String,
          

    },
    
});

module.exports=mongoose.model("Mentor",MentorsSchema);