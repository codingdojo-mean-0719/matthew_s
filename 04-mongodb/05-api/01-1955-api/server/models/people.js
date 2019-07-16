const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
},
  { timestamps: true }
);

mongoose.model('Person', personSchema);