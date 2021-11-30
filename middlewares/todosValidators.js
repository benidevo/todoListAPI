const { check } = require('express-validator');


exports.taskValidator = [
    check('task', 'Task is required').not().isEmpty(),
];
