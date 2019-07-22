const mongoose = require('mongoose');
let Cake = mongoose.model('Cake');
let Rating = mongoose.model('Rating');

module.exports = {
  index: (req, res) => {
    Cake.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  display: (req, res) => {
    Cake.findOne({ _id: req.params.id })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  add: (req, res) => {
    console.log(req.body);
    let newCake = new Cake(req.body);
    console.log(newCake);
    newCake.save(err => {
      if (err) {
        res.json({ Error: err });
      } else {
        res.json({ Success: req.body });
        console.log('added!');
      }
    })
  },
  addRating: (req, res) => {
    console.log(req.body);
    const rating = new Rating(req.body);
    Cake.findOneAndUpdate({ _id: req.params.id }, {
      $push: { rating: rating }
    }, function (err, data) {
      if (err) {
        res.json({ Error: err });
      } else {
        res.json({ Success: req.body });
      }
    })
  },
}

