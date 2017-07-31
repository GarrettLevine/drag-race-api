const Sequelize = require('sequelize');
const db = require('./db')

const QueensSeasons = db.define('QueensChallanges', {
  won: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

module.exports = QueensSeasons;