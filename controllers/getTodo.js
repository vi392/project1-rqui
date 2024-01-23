
//  import the module.
const Todo = require("../modules/todo");

// define route handler.
exports.getTodo = async(req,res) => {
    try{
        // featch all item from database.
         const todos = await Todo.find({});
      // response.
      res.status(200)
      .json(
        {
            success:true,
            todos,
            message:'Entry Created Successfully'

   }
      );
        
    }
    catch(err){
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

exports.getTodoById = async(req,res) =>{

    try{
     // featch item in database with the help of id.
     const id =req.params.id;
     const todo =await Todo.findById({_id:id})

     // data forgiven id not found.
     if(!todo){
        return res.status(400).json({
            success:false,
            message:"No data found wort given id",
        })
     }
     // data for given id found.
     res.status(200).json({
        success:true,
        data:todo,
        message:"todo ${id} data successfully fetched",
     })
        
    }
    catch(err){
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
