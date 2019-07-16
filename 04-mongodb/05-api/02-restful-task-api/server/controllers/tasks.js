const mongoose = require('mongoose');
let Task = mongoose.model('Task');

module.exports = {
  index: (req, res) => {
    Task.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json({ 'Error': err });
      });
  },
  display: (req, res) => {
    Task.findOne({ _id: req.params.id })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({ 'Error': err });
      })
  },
  add: (req, res) => {
    let newTask = new Task(req.body);
    console.log(newTask);
    newTask.save(err => {
      if (err) {
        res.json({ 'Error': err })
      } else {
        res.json({ 'Success': req.body })
        console.log("added!");
      }
    })
  },
  update: (req, res) => {
    Task.update({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        res.json({ 'Error': err })
      } else {
        res.json({ 'Success': req.body })
        console.log("Successfully Edited");
      }
    })
  },
  remove: (req, res) => {
    Task.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.json({ 'error': err });
      } else {
        res.json("Deleted");
      }
    })
  }
}
