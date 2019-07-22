const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const server = app.listen(8000);
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist/rate-my-cakes'));


require('./server/config/database.js');
require('./server/config/routes.js')(app);
