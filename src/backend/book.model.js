const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    book_description: {
        type: String
    },
    book_title: {
        type: String
    },
});

module.exports = mongoose.model('Book', Book);
