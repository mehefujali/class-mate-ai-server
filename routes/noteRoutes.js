const express = require("express");
const { createNote, getNoes } = require("../controllers/noteController");
const router = express.Router();

router.post("/", createNote);
router.get("/", getNoes);

module.exports = router;
