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
  place: {
    type: Sequelize.ARRAY(Sequelize.JSONB),
  },
  quote: {
    type: Sequelize.STRING,
    default: '',
  },
  winner: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Queen;
