const { Season } = require('models');
const {
  errorHandler: eh,
  formatEpisode,
} = require('utils');

function getEpisodeBySeason(req, res) {
  Season.findByPk(req.params.id)
    .then((season) => {
      if (!season) return Promise.reject(eh.noSeasonWithId(req.params.id));

      return season.getEpisodes();
    })
    .then((episodes) => {
      const formatedEpisodes = episodes.map(episode => formatEpisode(episode));
      res.status(200).json(formatedEpisodes);
    })
    .catch(err => res.status(500).json(eh.handleError(err)));
}

module.exports = getEpisodeBySeason;
