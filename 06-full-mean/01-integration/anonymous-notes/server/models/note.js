const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  note: { type: String, required: true, minlength: [3, "notes need to be at least 3 characters long, foo!"] },
}, { timestamps: true });

mongoose.model("Note", noteSchema);
