const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
    {
        dish: {
            type: String,
            // required: true,
            // unique: true
        },

        price: {
            type: Number,
            // required: true,
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model("recipe", recipeSchema)