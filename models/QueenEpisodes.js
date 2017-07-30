const Sequelize = require('sequelize');
const db = require('./db');

const QueensEpisodes = db.define('QueensEpisodes', {
  eliminated: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});