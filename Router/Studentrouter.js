
const Studentmodels=require("../Models/Studentmodules");

function GET(req,res,next){
    Studentmodels.find()
    .then ((response)=>{
        if (response.length<1){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No datas found",
            
            });
            
           
        }else
        {
            return res.status(200).json({
                success:true,
                data:response,
                message:"data fetched successfully",
            });
        }
    })

    .catch((e)=>{
        return res.status(402).json({
            success:false,
            erroe:e,
            message:"something went wrong",
        });
    });
}


function PUT(req,res,next){
    Studentmodels.findOne(id)
    .then ((response)=>{
        const id=Number(req.params.id)
        if (response.length<1){
            data.splice(id,1,req.body)
            return res.status(200).json({
                success:true,
                data:response,
                message:" datas edited successfully",
            
            });
        }
    })
    
    .catch((e)=>{
        return res.status(402).json({
            success:false,
            erroe:e,
            message:"something went wrong",
        });
    });
    }
    
    
   
function DELETE(req,res,next){
    Studentmodels.findOne(id)
    .then ((response)=>{
        const id=Number(req.params.id)
        if (response.length<1){
            data.splice(id,1)
            return res.status(200).json({
                success:true,
                data:response,
                message:" datas Delete successfully",
            
            });
        }
    })
    
    .catch((e)=>{
        return res.status(402).json({
            success:false,
            erroe:e,
            message:"something went wrong",
        });
    });
    }
     
async function CREATE(req,res,next){
const newStudentdata= await Studentmodels.create(req.body);
newStudentdata
.save()
    .then((response)=>(response))
    return res.status(200).json({
        message:'successful creating datas'
    })
.catch((error)=>{
    res.status(500).json({
        success:false,
        message:"something went wrong",
        error:error,
    });
  });
}
module.exports={
    GET,
    PUT,
    CREATE,
    DELETE,
};