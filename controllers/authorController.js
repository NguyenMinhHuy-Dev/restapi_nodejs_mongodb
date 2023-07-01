const Author = require("../models/author"); 
const Book = require("../models/book"); 

const authorController = {
    // ADD AUTHOR
    addAuthor: async (req, res) => {
        res.status(200).json(req.body);
    },
};

module.exports = authorController;