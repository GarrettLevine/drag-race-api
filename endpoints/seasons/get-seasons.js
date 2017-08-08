const {
  Season,
  Queen,
} = require('models');

const {
  errorHandler: eh,
  formatSeason,
} = require('utils');

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
  .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getSeasons;