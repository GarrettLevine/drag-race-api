const {
  Episode,
} = require('models');

function create(req, res) {
  return Episode.create({
    title: req.body.title,
    episodeInSeason: req.body.episodeInSeason,
    seasonId: req.body.seasonId,
    airDate: req.body.airDate,
    lipsyncSongId: req.body.lipsyncSongId,
    eliminatedQueenId: req.body.eliminatedQueenId,
  })
  .then(() => res.json(queen))
  .catch(err => res.json(err));
}

module.exports = create;
