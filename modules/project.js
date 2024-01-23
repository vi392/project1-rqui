// // import mongoose.
// const mongoose = require("mongoose");
// // route handler.

// const projectSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         require:true,
//         // maxLength:50,
//     },

//     email:{
//         type:String,
//         required:[true,"user email is required"],
//         unique:true,
        
//     },
//     headline:{
//         type:String,
//         require:true,
//     },
//     p_descripation:{
//         type:String,
//         require:true,
//        //  maxLength:50,
//    },
//    budget:{
//        type:String,
//        require:true
//    },
// })

// module.exports = mongoose.model("proj",projectSchema);

// Import mongoose
import mongoose from "mongoose";

// Define the project schema
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // maxLength: 50,
    },
    email: {
        type: String,
        required: [true, "user email is required"],
        unique: true,
    },
    headline: {
        type: String,
        required: true,
    },
    p_descripation: {
        type: String,
        required: true,
        //  maxLength:50,
    },
    budget: {
        type: String,
        required: true,
    },
});

// Create and export the 'proj' model based on the project schema
const Project = mongoose.model("proj", projectSchema);
export default Project;
