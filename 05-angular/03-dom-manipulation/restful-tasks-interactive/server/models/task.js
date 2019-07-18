const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
},
  { timestamps: true }
);

mongoose.model('Task', taskSchema);