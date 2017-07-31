const Sequelize = require('sequelize');
const db = require('./db')

const QueensSeasons = db.define('QueensChallanges', {
  info: {
    type: Sequelize.JSONB,
    allowNull: true,
  },
  won: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

module.exports = QueensSeasons;