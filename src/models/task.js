const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'This is description',
    completed: true
})

module.exports = Task