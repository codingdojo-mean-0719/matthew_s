const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: [true, "please select a valid rating"] },
  comment: { type: String, required: [true, "please leave a comment!"] },
}, { timestamps: true })

mongoose.model('Rating', ratingSchema);
