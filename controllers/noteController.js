const Note = require("../models/note");

const createNote = async (req, res) => {
  try {

    const note = new Note(req.body);
    console.log(note)
    const result = await note.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getNoes = async (req, res) => {
  const notes = await Note.find();
  res.json("hello");
};

module.exports = {
  createNote,
  getNoes,
};
