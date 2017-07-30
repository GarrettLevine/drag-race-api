const Sequelize = require('sequelize');
const db = require('./db')

const {
  Episode,
  Season,
 } = require('./Season');

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
  seasonId: {
    type: Sequelize.INTEGER,
    reference: {
      model: Season,
      key: id,
    },
  },

});

module.exports = Challenge;
