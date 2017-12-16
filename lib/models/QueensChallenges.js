const Sequelize = require('sequelize');
const db = require('./db');

const QueensSeasons = db.define('QueensChallenges', {
  won: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

module.exports = QueensSeasons;