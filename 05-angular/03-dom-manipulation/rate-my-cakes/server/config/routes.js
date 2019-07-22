const cakes = require('../controllers/cakes.js');

module.exports = function (app) {
  app.get('/cakes', cakes.index);
  app.get('/cakes/:id', cakes.display);
  app.post('/cakes/new', cakes.add);
  app.post('/cakes/:id/rate', cakes.addRating);
}
