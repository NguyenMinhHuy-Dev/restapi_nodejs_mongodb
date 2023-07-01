const Author = require("../models/authorModel"); 
const Book = require("../models/bookModel"); 

const authorController = {
    // ADD AUTHOR
    // MongoDB Method: save
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();

            res.status(200).json(saveAuthor);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // GET ALL AUTHORS
    // MongoDB Method: find
    getAllAuthor: async (req, res) => {
        try {  
            const authors = await Author.find();
            res.status(200).json(authors);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // GET AN AUTHOR BY ID
    // MongoDB Method: findById - populate
    getAnAuthorById: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // UPDATE AN AUTHOR BY ID
    // MongoDB Method: findByIdAndUpdate
    updateAnAuthorById: async (req, res) => {
        try {
            const author = await Author.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("⚡️[Notification]: Update successful");
        }   
        catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE AN AUTHOR BY ID
    // MongoDB Method: findByIdAnd
    deleteAnAuthorById: async (req, res) => {
        try {
            await Book.deleteMany({ author: req.params.id });
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("⚡️[Notification]: Delete successful");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = authorController;