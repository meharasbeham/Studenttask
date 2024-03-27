const {default:mongoose}=require("mongoose");

const StudentsSchema=mongoose.Schema({
   StudentName:{
        type:String,
            require:true,

    },
    
  Studentaddress:{
        type:String,
            require:true,

    },
    Studentid:{
        type:String,
            require:true,
    },
     
   Course:{
        type:String,
            require:true,

    }, 
    IsActive:{
        type:Boolean,
        require:true,
    }
    
});

module.exports=mongoose.model("Student",StudentsSchema);