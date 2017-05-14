const Sequelize = require('sequelize');
const db = require('./db');

const { Queen } = require('./');

const Season = db.define('Season', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  seasonNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  winnerId: {
    type: Sequelize.INTEGER,
    reference: {
      model: Queen,
      key: 'id',
    },
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING,
  },
});

module.exports = Season;

// const mongoose = require(`mongoose`);
// const Schema = mongoose.Schema;
// const labelIdType = require(`./label-id-type`);

// const SeasonSchema = new Schema({
//   season: {
//     type: String,
//     required: true,
//   },
//   queens: [labelIdType],
//   year: {
//     type: Number,
//     required: true,
//   },
//   episodes: [labelIdType],
//   winner: labelIdType,
//   runnersUp: [labelIdType],
// });

// module.exports = mongoose.model(`Season`, SeasonSchema);
