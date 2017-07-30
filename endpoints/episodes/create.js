const {
  Episode,
} = require('models');

function create(req, res) {
  return Episode.create({
    title: req.body.title,
    episodeInSeason: req.body.episodeInSeason,
    seasonId: req.body.seasonId,
    airDate: req.body.airDate,
    lipsyncId: req.body.lipsyncId,
  })
  .then(episode => res.json(episode))
  .catch(err => res.json(err));
}

module.exports = create;
