//  import the module.
const Todo = require("../modules/todo");

// define route handler.
exports.deleteTodo = async(req,res) => {
    try{
        const {id} =req.params;

        await Todo.findByIdAndDelete(id);
        // response.
      res.status(200)
      .json(
        {
            success:true,
            message:'deleted Successfully',

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
