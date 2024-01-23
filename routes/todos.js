const express = require("express");
const router = express.Router();

// import controller.
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");
const {project1} = require("../controllers/project1");

// define Api routes
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);

router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
router.post("/project1",project1);


module.exports = router;