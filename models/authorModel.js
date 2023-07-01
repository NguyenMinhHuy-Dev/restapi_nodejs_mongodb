const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    lastName: {
        type: String,
        require: true
    },
    middleName: {
        type: String
    },
    firstName: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ]
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;