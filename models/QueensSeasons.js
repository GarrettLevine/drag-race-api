const Sequelize = require('sequelize');
const db = require('./db');

const QueensSeasons = db.define('QueensSeasons', {
  place: {
    type: Sequelize.INTEGER,
    allowNull:false,
  },
});

module.exports = QueensSeasons;
