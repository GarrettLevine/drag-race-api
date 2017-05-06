const Sequelize = require('sequelize');
const db = require('./db');

const Season = db.define('Season', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Queens: {
    type: Sequelize.ARRAY,
  },
  winner: {
    type: Sequelize.JSONB,
  },
  runnersUp: {
    type: Sequelize.ARRAY,
  },
  image_url: {
    type: Sequelize.STRING,
  },
});

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
