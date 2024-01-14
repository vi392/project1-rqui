//  import the module.
const Todo = require("../modules/todo");

// define route handler.
exports.updateTodo = async(req,res) => {
    try{
        const {id} =req.params;
        const {title ,description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
           {_id:id},
           {title,description,updateAt:Date.now()},

        )
        // response.
      res.status(200)
      .json(
        {
            success:true,
            Data:todo,
            message:'updated Successfully',

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