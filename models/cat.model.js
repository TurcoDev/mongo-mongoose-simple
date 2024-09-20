const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    name: String,
    race: String,
})

const Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;