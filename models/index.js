'use strict';

const db = require('./db');

const Season = require('./Season');

const model = db.sync();

module.exports = {
  model,
  Season,
};
