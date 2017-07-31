const Sequelize = require('sequelize');
const db = require('./db')

const { Episode } = require('./');

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
    type: Sequelize.STRING,
    allowNull: true,
  },
  episodeId: {
    type: Sequelize.INTEGER,
    reference: {
      model: Episode,
      key: 'id',
    },
  },
});

module.exports = Challenge;
