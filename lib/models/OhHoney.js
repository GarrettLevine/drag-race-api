const Sequelize = require(`sequelize`);
const db = require(`./db`);

const { Queen } = require(`./`);

const OhHoney = db.define(`OhHoney`, {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  quote: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  queenId: {
    type: Sequelize.INTEGER,
    reference: {
      model: Queen,
      key: `id`,
    },
  },
});

module.exports = OhHoney;
