const { Season } = require('models');

function create(req, res) {
  return Season.create({
    seasonNumber: req.body.seasonNumber,
    winnerId: req.body.winnerId,
    year: req.body.year,
    image_url: req.body.image_url,
  })
  .then(season => res.json(season))
  .catch(err => res.json(err));
}

module.exports = create;
