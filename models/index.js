'use strict';

const db = require('./db');

const Season = require('./Season');
const Queen = require('./Queen');

Queen.belongsToMany(Season, { through: 'QueensSeason' });
Season.belongsToMany(Queen, { through: 'QueensSeason' });

const model = db.sync();

module.exports = {
  model,
  Season,
  Queen,
};
