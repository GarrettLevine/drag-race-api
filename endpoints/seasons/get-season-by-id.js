const {
  Season,
  Queen,
} = require('models');

const {
  formatSeason,
  errorHandler: eh,
} = require('utils');

function getSeasonById(req, res) {
  const { id } = req.params;

  return Season.findById(id, {
    include: [{
      model: Queen,
      attributes: ['id', 'name'],
    }],
  })
    .then(season => {
      if (!season) return Promise.reject(eh.noSeasonWithId(id));
      res.json(formatSeason(season));
    })
    .catch(err => res.status(400).json(eh.serverError()));
}

module.exports = getSeasonById;
