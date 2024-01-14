//  import the module.
const Todo = require("../modules/todo");

// define route handler.
 
exports.createTodo = async(req,res) => {
    try{
         // extract title and descripation from request body
         const{title,descripation} = req.body;
         //create a new Todo obj and insert in DB
         const response = await Todo.create({title,descripation});
    // send a json responce with a success flag
    res.status(200).json(
        {
            success:true,
            data:response,
            message:'Entry Created Successfully'

        }
    );
        
    }
    catch(err){
      console.error(err);
      console.log(err);
      res.status(500)
      .json(
        {
          success:false,
           data:"internal server error",
           message:err.message, 
        }
      )
    }
}