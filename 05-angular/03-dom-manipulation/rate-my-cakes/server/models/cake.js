const mongoose = require('mongoose');
const Rating = require('rating.js');

const CakeSchema = new mongoose.Schema({
  image: { type: String, required: [true, "You must include a picture of that delicious cake!"] },
  baker: { type: String, required: [true, "You must include the chef's name!!"] },
  rating: [ratingSchema]
}, { timestamps: true })


mongoose.model('Cake', CakeSchema);

