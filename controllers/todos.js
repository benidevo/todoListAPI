const TodoItem = require('../models/todoItem');
const {validationResult} = require('express-validator');


exports.createTodoItem = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const task = req.body.task;
    const todoItem = new TodoItem({ task });
    await todoItem.save()

    res.status(201).json({data: todoItem});
};

exports.getAllTodoItems = async function (req, res) {
    const todoItems = await TodoItem.find();
    res.status(200).json({tasks: todoItems});
};


exports.getTodoItemById = async function (req, res) {
    const taskId = req.params.taskId

    let todoItem;
    try {
        todoItem = await TodoItem.findById(taskId)
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' });
    }

    if (!todoItem) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ data: todoItem });
}

exports.deleteTodoItem = async function (req, res) {
    const taskId = req.params.taskId;

    let todoItem;
    try {
        todoItem = await TodoItem.findById(taskId)
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' });
    }

    if (!todoItem) {
        return res.status(404).json({ message: 'Task not found' });
    }

    await todoItem.delete();
    res.status(200).json({ message: 'Task deleted' });
}

exports.updateTodoItem = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    
    const task = req.body.task;
    const taskId = req.params.taskId;

    let todoItem;
    try {
        todoItem = await TodoItem.findById(taskId)
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' });
    }

    if (!todoItem) {
        return res.status(404).json({ message: 'Task not found' });
    }

    todoItem.task = task;
    todoItem.updatedAt = Date.now();
    await todoItem.save();

    res.status(200).json({ data: todoItem });
};
