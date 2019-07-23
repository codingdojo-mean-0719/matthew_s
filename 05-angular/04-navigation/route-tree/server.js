const express = require('express');
const app = express();
const server = app.listen(8000);
app.use(express.static(__dirname + '/dist/route-tree'));
