const express = require('express');
const router = express.Router();
const {createTodoItem, getAllTodoItems} = require('../controllers/todos');

// create todo item
router.post('/', createTodoItem)

// retrieve all todo items
router.get('/', getAllTodoItems)

module.exports = router;
