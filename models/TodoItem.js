const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoItemSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);
