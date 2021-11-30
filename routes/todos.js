const express = require('express');
const router = express.Router();
const {createTodoItem, getAllTodoItems, getTodoItemById, deleteTodoItem, updateTodoItem} = require('../controllers/todos');

// create todo item
router.post('/', createTodoItem)

// retrieve all todo items
router.get('/', getAllTodoItems)

// retrieve todo item by id
router.get('/:taskId', getTodoItemById)

// delete todo item by id
router.delete('/:taskId', deleteTodoItem)

// update todo item by id
router.put('/:taskId', updateTodoItem)

module.exports = router;
