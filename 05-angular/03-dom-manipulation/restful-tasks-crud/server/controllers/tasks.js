const mongoose = require('mongoose');
let Task = mongoose.model('Task');

module.exports = {
  index: (req, res) => {
    Task.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  display: (req, res) => {
    Task.findOne({ _id: req.params.id })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  add: (req, res) => {
    console.log(req.body);
    let newTask = new Task(req.body);
    console.log(newTask);
    newTask.save(err => {
      if (err) {
        res.json({ Error: err });
      } else {
        res.json({ Success: req.body });
        console.log('added!');
      }
    });
  },
  update: (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
      if (err) {
        res.json({ Error: err });
      } else {
        res.json(updatedTask);
        console.log('Successfully Edited');
      }
    });
  },
  destroy: (req, res) => {
    Task.findByIdAndDelete(req.params.id)
      .then(deletedTask => {
        res.json(deletedTask);
      })
      .catch(err => {
        res.status(500).json(err);
      })
    //   if (err) {
    //     res.json({ error: err });
    //     console.log(err);
    //   } else {
    //     res.json('Deleted');
    //     console.log("deleted");
    //   }
    // });
  },
};
