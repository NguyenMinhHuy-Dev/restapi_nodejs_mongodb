const bookController = require("../controllers/bookController");

const router = require("express").Router();

// ADD BOOK
router.post("/", bookController.addBook);

// GET ALL BOOKS
router.get("/", bookController.getAllBooks);

// GET A BOOK BY ID
router.get("/:id", bookController.getABookById);

// UPDATE A BOOK BY ID
router.put("/:id", bookController.updateABookById);

module.exports = router;