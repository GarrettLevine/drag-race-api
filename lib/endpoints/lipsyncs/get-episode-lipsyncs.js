const {
  Episode,
  Queen,
  Lipsync,
} = require(`models`);

const {
  errorHandler: eh,
  formatLipsync,
} = require(`utils`);

function getEpisodeLipsyncs(req, res) {
  const { id } = req.params;

  return Episode.findById(id)
    .then((episode) => {
      if (!episode) return Promise.reject(eh.noEpisodeWithId(id));

      return Lipsync.findAll({
        where: {
          episodeId: id,
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

module.exports = getEpisodeLipsyncs;
