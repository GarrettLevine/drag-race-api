const Sequelize = require('sequelize');
const db = require('./db')

const Season = require('./Season');

const Challenge = db.define('Challenge', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: Sequelize.ENUM('mini', 'maxi'),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  prize: {
    type: Sequelize.String,
  },
  episodeId: {
    type: Sequelize.INTEGER,
    reference: {
      model: Episode,
      key:id,
    },
  },
});

module.exports = Challenge;
