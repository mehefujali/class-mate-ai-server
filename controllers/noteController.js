const Note = require("../models/note");

const createNote = async (req, res) => {
  res.send("comming soon");
};

const getNoes = async (req, res) => {
  const notes = await Note.find();
  res.json('hello');
};

module.exports = {
  createNote,
  getNoes,
};
