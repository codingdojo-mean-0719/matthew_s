const mongoose = require('mongoose'),
  Quote = mongoose.model('Quote')
module.exports = function (app) {
  app.get('/', function (request, response) {
    response.render('index');
  });

  app.post('/quotes', function (req, res) {
    console.log("Post Data", req.body);
    var quote = new Quote(req.body);
    quote.save(function (err) {
      if (err) {
        console.log('something aint right');
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
      } else {
        console.log("homie is in the db now!");
      }
      res.redirect("/");
    })
  });

  app.get('/quotes', function (req, res) {
    Quote.find({}).sort('-createdAt')
      .then(results => {
        res.render('quotes', { quotes: results });
      })
      .catch(err => {
        console.log("error fetching data:", err)
      });
  })
}