
const Studentmodel=require("../Models/Studentmodules");

function GET(req,res,next){
    Studentmodel.find()
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


async function CREATE(req,res,next){
const newStudentdata= await Studentmodel.create(req.body);
console.log(newStudentdata);

    return res.status(200).json({
        message:'successful creating datas'
    });
}
module.exports={
    GET,
    CREATE,
};