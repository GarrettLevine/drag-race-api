const {
  Season,
  Queen,
} = require('models');

const { formatSeason } = require('../utils');

function getSeasonById(req, res) {
  return Season.findById(req.params.id, {
    include: [{
      model: Queen,
      attributes: ['id', 'name'],
    }],
  })
    .then(season => res.json(formatSeason(season)))
    .catch(err => res.json(err));
}

module.exports = getSeasonById;
