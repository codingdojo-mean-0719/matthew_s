const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
  index: (req, res) => {
    Person.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  },
  display: (req, res) => {
    Person.findOne({ name: req.params.name })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({ error: err });
        console.log(err);
      })
  },
  add: (req, res) => {
    let person = new Person({ name: req.params.name });
    person.save(err => {
      if (err) {
        res.json({ error: err });
      } else {
        res.redirect('/' + req.params.name);
        console.log("added!")
      }
    })
  },
  delete: (req, res) => {
    Person.remove({ name: req.params.name }, (err) => {
      if (err) {
        console.log("something went wrong");
      } else {
        res.redirect('/')
      }
    })
  }
}