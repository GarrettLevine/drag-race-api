const { Episode } = require('models');
const {
  errorHandler: eh,
  formatEpisode,
} = require('utils');

function getEpisodeById(req, res) {
  return Episode.findByPk(req.params.id)
    .then((episode) => {
      if (!episode) return Promise.reject(eh.noEpisodeWithId(req.params.id));

      const formatedEpisode = formatEpisode(episode);
      res.status(200).json(formatedEpisode);
    })
    .catch(err => res.status(500).json(eh.handleError(err)));
}

module.exports = getEpisodeById;