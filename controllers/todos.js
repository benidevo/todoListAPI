const TodoItem = require('../models/todoItem');


exports.createTodoItem = async function (req, res) {
    const task = req.body.task;
    const todoItem = new TodoItem({ task });
    await todoItem.save()
    res.status(201).json({data: todoItem});
};

exports.getAllTodoItems = async function (req, res) {
    const todoItems = await TodoItem.find();
    res.status(200).json({tasks: todoItems});
};
