const person = require('../controllers/peoples.js');

module.exports = function (app) {
  app.get('/', function (req, res) {
    person.index(req, res);
  });

  app.get('/:name', (req, res) => {
    person.display(req, res);
  })

  app.get('/new/:name', (req, res) => {
    person.add(req, res);
  })

  app.get('/remove/:name', (req, res) => {
    person.remove(req, res);
  })
}