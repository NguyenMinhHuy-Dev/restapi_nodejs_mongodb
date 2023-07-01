const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    lastName: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
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