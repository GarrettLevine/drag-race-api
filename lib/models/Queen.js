const Sequelize = require('sequelize');
const db = require('./db');

const Queen = db.define('Queen', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  image_url: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  quote: {
    type: Sequelize.STRING,
    default: '',
  },
  missCongeniality: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: true,
  },
  winner: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    default: false,
  },
});

module.exports = Queen;

