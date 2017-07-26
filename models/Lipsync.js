const Sequelize = require(`sequelize`);
const db = require(`./db`);

const {
  Episode,
  Queen,
  Season,
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
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  episodeId: {
    type: Sequelize.INTEGER,
    reference: {
        model: Episode,
        key: `id`,
    },
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
  winningQueenId: {
    type: Sequelize.INTEGER,
    reference: {
        model: Queen,
        key: `id`,
    },
    allowNull: false,
  },
  eliminatedQueenId: {
    type: Sequelize.INTEGER,
    reference: {
      model: Queen,
      key: `id`,
    },
    allowNull: false,
  },
});

module.exports = Lipsync;
