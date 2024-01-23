//  import the module.
const proj = require("../modules/project");

// define route handler.
exports.project1 = async(req,res) =>{
    try{
        
        // extract title and descripation from request body
        const{title,email,headline,p_descripation,budget} = req.body;
        //create a new Todo obj and insert in DB
        const response = await proj.create({title,email,headline,p_descripation,budget});
   // send a json responce with a success flag
   res.status(200).json(
       {
           success:true,
           data:response,
           message:'Entry Created Successfully'

       }
   );

    }
    catch(error){
        console.error(err);
        // console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                 error:"internal server error",
                message: "server error", 
            }
        );
    }
}

