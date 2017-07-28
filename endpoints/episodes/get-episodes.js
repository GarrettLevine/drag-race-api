const {
  Episode,
} = require(`models`);

const {
  formatEpisode,
  errorHandler: eh,
} = require(`utils`);

function getEpisodes(req, res) {
  return Episode.findAll({
    limit: req.query.limit || 20,
    offset: req.query.offset || 0,
  })
  .then(episodes => {
    const formattedEpisodes = episodes
      .map(episode => formatEpisode(episode));
    res.json(formattedEpisodes);
  })
  .catch(err => res.status(400).json(err));
}

module.exports = getEpisodes;
