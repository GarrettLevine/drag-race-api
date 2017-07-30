const Sequelize = require('sequelize');
const db = require('./db')

const QueensSeasons = db.define('QueensSeasons', {
  info: {
    type: Sequelize.JSONB,
    allowNull: true,
  },
});

module.exports = QueensSeasons;