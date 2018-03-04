const Sequelize = require(`sequelize`);
const db = require(`./db`);

const { Season } = require(`./`);

const Episode = db.define(`Episode`, {
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
  episodeInSeason: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  seasonId: {
    type: Sequelize.INTEGER,
    reference: {
      model: Season,
      key: `id`,
    },
    allowNull: false,
  },
  airDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Episode;
