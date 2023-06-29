const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dietSchema = new Schema ({
    name: String,
    Breakfast: String,
    Lunch: String,
    Dinner: String,
    Dessert: String,
    Comments: String,
    Rating: String,
}, {
    timestamp: true
});

module.exports = mongoose.model('Diet', dietSchema);