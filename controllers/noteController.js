const Note = require("../models/note");

const createNote = async (req, res) => {
  res.send("comming soon");
};

const getNoes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

module.exports = {
  createNote,
  getNoes,
};
