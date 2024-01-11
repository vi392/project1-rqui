// create a server.
const express=require("express");
const app=express();

// load config from dotenv.
require("dotenv").config;
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API

const todoRoutes = require("./routes/todos");
//mount the todo AsPi routes
app.use("/api/v1",todoRoutes);

// start server
app.listen(PORT, () =>{
    console.log('Server started successfully at ${PORT}');
});

// CONNECT DB
const dbconnect = require("./config/database");
dbconnect();
// default Router
app.get("/",(req,res) =>{
    res.send('<h1>this is home page</h1>');
})