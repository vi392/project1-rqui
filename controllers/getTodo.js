
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