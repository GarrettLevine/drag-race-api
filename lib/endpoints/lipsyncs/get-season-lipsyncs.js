const {
  Season,
  Queen,
  Lipsync,
} = require(`models`);

const {
  errorHandler: eh,
  formatLipsync,
} = require(`utils`);

function getSeasonLipsyncs(req, res) {
  const { id } = req.params;

  return Season.findByPk(id)
    .then((season) => {
      if (!season) return Promise.reject(eh.noSeasonWithId(id));

      return season.getEpisodes();
    })
    .then(episodes => {
      return Lipsync.findAll({
        where: {
          episodeId: episodes.map(episode => episode.id),
        },
        include: [{
          model: Queen,
          through: {
            attributes: [`won`],
          },
        }],
      })
    })
    .then(lipsyncs => {
      const formattedLipsyncs = lipsyncs.map(lipsync => formatLipsync(lipsync));

      res.status(200).json(formattedLipsyncs);
    })
    .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getSeasonLipsyncs;
