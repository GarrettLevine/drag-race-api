const {
  Season,
  Queen,
} = require('models');

function getSeasons(req, res) {
  return Season.findAll({
    include: [Queen],
  })
  .then(seasons => res.json(seasons))
  .catch(err => res.json(err));
}

module.exports = getSeasons;