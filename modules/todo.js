// const mongoose = require("mangoose");
const mongoose = require("mongoose");
// route handler.
 
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true,
            // maxLength:50,
        },
        descripation:{
             type:String,
             require:true,
            //  maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
    }
);

module.exports = mongoose.model("Todo",todoSchema);

