const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dietSchema = new Schema ({
    name: String,
    Meal: String,
    Recipe: String,

}, {
    timestamp: true
});

module.exports = mongoose.model('Diet', dietSchema);