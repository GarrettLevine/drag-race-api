const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const labelIdType = require(`./label-id-type`)

const QueenSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  winner: {
    type: Boolean,
    default: false,
  },
  place: {
    type: Number,
    required: true,
  },
  season: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'Season',
    },
    label: {
      type: String,
    }
  },
  episodes: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Episode',
      },
      label: {
        type: String,
      },
    },
  ],
  quote: {
    type: String,
  },
  image_url: {
    type: String,
  },
});

module.exports = mongoose.model(`Queen`, QueenSchema);
