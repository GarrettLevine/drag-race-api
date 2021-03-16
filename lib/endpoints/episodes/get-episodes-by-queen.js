const {
  Episode,
  Queen,
} = require('models');

const {
  errorHandler: eh,
  formatEpisode,
} = require('utils');

function getEpisodesByQueen(req, res) {
  Queen.findByPk(req.params.id)
    .then(queen => {
      if (!queen) return Promise.reject((eh.noQueenWithId(req.params.id)));

      return queen.getEpisodes();
    })
    .then(episodes => {
      const formatedEpisodes = episodes.map(episode => formatEpisode(episode));
      res.status(200).json(formatedEpisodes);
    })
    .catch(err => res.status(500).json(eh.handleError(err)));
}

module.exports = getEpisodesByQueen;
