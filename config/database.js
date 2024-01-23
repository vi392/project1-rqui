// const mongoose= require("mongoose");

// require("dotenv").config();
// const dbConnect= () =>{
//     mongoose.connect(process.env.DATABASE_URL,{
//        useNewUrlParser:true,
//        useUnifiedTopology:true, 
//     })
//     .then(() => console.log("DB ka connection is successful"))
//     .catch((error) => {
//         console.log("issuse in DB Connection");
//         console.error(error.message);
//         process.exit(1);
//     } );

// }


//  module.exports = dbConnect;

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection is successful"))
    .catch((error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    });
};

export default dbConnect;
