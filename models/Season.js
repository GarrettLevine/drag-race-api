const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const labelIdType = require('./label-id-type');

const SeasonSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  queens: [labelIdTypes],
  airDate: {
    type: Date,
    required: true,
  },
  episodes: [labelIdType],
  winner: labelIdType,
  runnerUps: [labelIdTypes],
});

module.exports = mongoose.model(`Season`, SeasonSchema);
