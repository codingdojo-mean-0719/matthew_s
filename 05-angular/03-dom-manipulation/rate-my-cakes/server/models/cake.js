const mongoose = require('mongoose');


const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: [true, "please select a valid rating"] },
  comment: { type: String, required: [true, "please leave a comment!"] },
}, { timestamps: true })
const CakeSchema = new mongoose.Schema({
  image: { type: String, required: [true, "You must include a picture of that delicious cake!"] },
  baker: { type: String, required: [true, "You must include the chef's name!!"] },
  rating: [ratingSchema]
}, { timestamps: true })




mongoose.model('Rating', ratingSchema);
mongoose.model('Cake', CakeSchema);

