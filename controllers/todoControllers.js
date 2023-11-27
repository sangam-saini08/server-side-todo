const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");

//@desc Get todo
//@route GET /api/todos
const getTodos = asyncHandler(async (req, res) => {
	const todos = await Todo.find().sort({ isCompleted: -1 }).exec();
	console.log(todos);
	res.status(200).json(todos);
});

//@desc create todo
//@route POST /api/todos
const createTodo = asyncHandler(async (req, res) => {
	const { todoTitle } = req.body;
	if (!todoTitle) {
		res.status(400);
		throw new Error("Invalid");
	}
	const todo = await Todo.create({
		todoTitle: todoTitle,
		isCompleted: false,
	});
	res.status(201).json(todo);
});

//@desc update todo
//@route PUT /api/todos/:id
const updateTodo = asyncHandler(async (req, res) => {
	const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	if (!updatedTodo) {
		res.status(400);
		throw new Error("Invalid");
	}
	res.status(200).json(updatedTodo);
});

//@desc update todo
//@route DELETE /api/todos/:id
const deleteTodo = asyncHandler(async (req, res) => {
	const singleTodo = await Todo.findByIdAndDelete(req.params.id);
	res.status(200).json(singleTodo);
});

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
