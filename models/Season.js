const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const labelIdType = require(`./label-id-type`);

const SeasonSchema = new Schema({
  season: {
    type: String,
    required: true,
  },
  queens: [labelIdType],
  year: {
    type: Number,
    required: true,
  },
  episodes: [labelIdType],
  winner: labelIdType,
  runnersUp: [labelIdType],
});

module.exports = mongoose.model(`Season`, SeasonSchema);
