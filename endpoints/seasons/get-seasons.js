const { Season } = require('models');

function getSeasons(req, res) {
  return Season.findAll()
    .then(seasons => res.json(seasons))
    .catch(err => res.json(err));
}

module.exports = getSeasons;