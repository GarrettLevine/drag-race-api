const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const labelIdType = require(`./label-id-type`);

const EpisodeSchema = new Schema({
  season: [label-id-type],
  episodeNumber: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  airDate: {
    type: Date,
    required: true,
  },
  miniChallenge: {
    title: {
      type: String,
    },
    winner: [labelIdType],
  },
  mainChallenge: {
    title: {
      type: String,
      required: true,
    },
    winner: [labelIdType],
  },
  bottomTwo: [labelIdType],
  lipSyncSong: {
    artist: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  eliminatedQueen: labelIdType,
});

module.exports = mongoose.model(`Episode`, EpisodeSchema);
