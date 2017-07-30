const Sequelize = require('sequelize');
const db = require('./db');

const Queen = require('./');

const Episode = db.define('Episode', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  airDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  lipsyncSongId: {
    type: Sequelize.STRING,
  },
});

module.exports = Episode;
