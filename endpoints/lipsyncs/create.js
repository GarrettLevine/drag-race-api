const {
  Lipsync,
} = require('models');

function create(req, res) {
  return Lipsync.create({
    name: req.body.name,
    artist: req.body.artist,
    episodeId: req.body.episodeId,
    seasonId: req.body.seasonId,
    winningQueenId: req.body.winningQueenId,
    eliminatedQueenId: req.body.eliminatedQueenId,
  })
  .then(lipsync => res.json(lipsync))
  .catch(err => res.json(err));
}

module.exports = create;
