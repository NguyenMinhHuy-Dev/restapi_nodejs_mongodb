const Book = require("../models/bookModel");
const Author = require("../models/authorModel");

const bookController = {
    // ADD BOOK
    // MongoDB Method: save - updateOne
    addBook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            if (newBook.author) {
                const author = Author.findById(newBook.author._id);
                await author.updateOne({ $push: { books: saveBook._id } });
            }
            res.status(200).json(saveBook);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // GET ALL BOOKS
    // MongoDB Method: find
    getAllBooks: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } 
        catch (err) {
            res.status(500).json(err);    
        }
    },

    // GET A BOOK BY ID
    // MongDB Method: findById - populate
    getABookById: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // UPDATE A BOOK BY ID
    // MongoDB Method: findById - update
    updateABookById: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({ $set: req.body });
            res.status(200).json("⚡️[Notification]: Update successful");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = bookController;