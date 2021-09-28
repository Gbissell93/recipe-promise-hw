const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        todo: {
            type: String,
            required: true,
            unique: true
        },
        completed : {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model("todo", todoSchema);