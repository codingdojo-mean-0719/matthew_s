const notes = require('../controllers/notes.js');

module.exports = function (app) {
  app.get('/notes', notes.index);
  app.post('/notes/new', notes.add);
}
