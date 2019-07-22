const controllers = require('../controllers/controllers.js');

module.exports = function (app) {
  app.get('/', function (req, res) {
    tasks.index(req, res);
  })
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve('./server/app.component.html'));
  });
};
