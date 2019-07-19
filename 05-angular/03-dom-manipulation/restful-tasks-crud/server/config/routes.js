const tasks = require('../controllers/tasks.js');

module.exports = function (app) {
  app.get('/tasks', function (req, res) {
    tasks.index(req, res);
  });

  app.get('/:id', (req, res) => {
    tasks.display(req, res);
  });

  app.post('/create', (req, res) => {
    tasks.add(req, res);
  });

  app.put('/update/:id', (req, res) => {
    tasks.update(req, res);
  });

  app.delete('/remove/:id', (req, res) => {
    tasks.destroy(req, res);
  });
};
