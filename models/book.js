const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    releaseDate: {
        type: String,
        require: true
    },
    genres: {
        type: [String],
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
