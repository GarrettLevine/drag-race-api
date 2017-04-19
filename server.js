const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const {
  username,
  password
} = require('./private-config');
const router = require('./router/index.js');

mongoose.connect(`mongodb://${username}:${password}@ds139979.mlab.com:39979/drag-race-api`);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use('/api', router);

app.listen(port);
console.log(`App is running on port ${port}`);