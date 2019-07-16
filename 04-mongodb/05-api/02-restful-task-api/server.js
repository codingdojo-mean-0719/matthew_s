const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const server = app.listen(1337);
const mongoose = require('mongoose');
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);