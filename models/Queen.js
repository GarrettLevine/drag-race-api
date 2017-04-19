const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QueenSchema = new Schema({
  name: String,
});

module.exports = mongoose.model('Queen', QueenSchema);
// Queen {
//   id: 1,
//   name: 'Trixie Matel'
//   season: [],
// }

// Season {
//   id: 7
//   queens: [1],
//   winner: {
//     name: 'Violet',
//     id: 131,
//   },
//   missCongeniality: 12313,
//   year:
//   episodes,
// }

// Episode {
//   id,
//   airDate
//   seasonId,
//   episodeNumber,
//   queens,
//   mainChallengeWinner,
//   miniChallengerWinner,
// }