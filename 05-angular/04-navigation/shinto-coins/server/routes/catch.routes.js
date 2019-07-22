const router = require('express').Router();
const path = require('path');

router.all('*', function (request, response) {
  console.log('invalid route, redirecting');
  response.sendFile(path.resolve('dist/shinto-coins/index.html'));
});

module.exports = router;
