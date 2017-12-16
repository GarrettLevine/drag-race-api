const Sequelize = require(`sequelize`);
const db = require(`./db`);

const {
  Episode,
  Queen,
} = require(`./`);

const Lipsync = db.define(`Lipsync`, {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  episodeId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Episode,
      key: `id`,
    },
  },
});

module.exports = Lipsync;
