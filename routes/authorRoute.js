const authorController = require("../controllers/authorController");

const router = require("express").Router();

// ADD AUTHOR
router.post("/", authorController.addAuthor);

// GET ALL AUTHORS
router.get("/", authorController.getAllAuthor);

// GET AN AUTHOR BY ID
router.get("/:id", authorController.getAnAuthorById);

// UPDATE AN AUTHOR BY ID
router.put("/:id", authorController.updateAnAuthorById);

// DELETE AN AUTHOR BY ID
router.delete("/:id", authorController.deleteAnAuthorById);

module.exports = router;