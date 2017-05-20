const {
  Season,
  Queen,
} = require('models');

function getSeasons(req, res) {
  return Season.findAll({
    include: [
      { model: Queen, attributes: [ 'name', 'id' ] },
    ],
  })
  .then(seasons => res.json(seasons))
  .catch(err => res.json(err));
}

module.exports = getSeasons;