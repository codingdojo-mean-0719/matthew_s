const mongoose = require('mongoose');
let Note = mongoose.model('Note');

module.exports = {
  index: (req, res) => {
    Note.find().sort({ createdAt: -1 })
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  add: (req, res) => {
    let newNote = new Note(req.body);
    newNote.save(err => {
      if (err) {
        console.log(err);
        res.status(403).json(Object.keys(err.errors).map(key =>
          err.errors[key].message)
        );
      } else {
        res.json({ Success: req.body });
        console.log("Added Successfully!");
      }
    })
  },
}
