const express = require('express');
const router = express.Router();
const { createTodoItem, getAllTodoItems, getTodoItemById, deleteTodoItem, updateTodoItem } = require('../controllers/todos');
const {taskValidator} = require('../middlewares/todosValidators');

// create todo item
router.post('/', taskValidator, createTodoItem)

// retrieve all todo items
router.get('/', getAllTodoItems)

// retrieve todo item by id
router.get('/:taskId', getTodoItemById)

// delete todo item by id
router.delete('/:taskId', deleteTodoItem)

// update todo item by id
router.put('/:taskId', taskValidator, updateTodoItem)

module.exports = router;
