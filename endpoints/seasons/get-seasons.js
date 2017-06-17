const {
  Season,
  Queen,
} = require('models');

const { formatSeason } = require('../utils');

function getSeasons(req, res) {
  return Season.findAll({
    include: [
      { model: Queen, attributes: [ 'name', 'id' ] },
    ],
  })
  .then(seasons => {
    const formatedSeasons = seasons
      .map(season => formatSeason(season));
    res.json(formatedSeasons);
  })
  .catch(err => res.json(err));
}

module.exports = getSeasons;