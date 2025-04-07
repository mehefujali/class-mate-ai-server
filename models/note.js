const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
      topic: String,
      subject: String,
      classLevel: String,
      language: String,
      noteText: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
})

const Note = mongoose.model('Note' , noteSchema)
module.exports = Note