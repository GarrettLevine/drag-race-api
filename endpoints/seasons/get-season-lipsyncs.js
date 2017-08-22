const {
  Season,
  Lipsync,
} = require(`models`);

const {
  errorHandler: eh,
  formatLipsync,
} = require(`utils`);

function getSeasonLipsyncs(req, res) {
  const { id } = req.params;

  return Season.findById(id)
    .then((season) => {
      if (!season) return Promise.reject(eh.noSeasonWithId(id));

      return season.getEpisodes();
    })
    .then(episodes => {
      const lipsyncsArray = episodes.map(episode => {
        return Lipsync.findAll({
          where: {
            episodeId: episode.id,
          },
        })
      })
    
      return Promise.all(lipsyncsArray);
    })
    .then(lipsyncs => {
      const formattedLipsync = lipsyncs.map(lipsync => {
        return lipsync.map(lipsyncData => {
          return lipsyncData.dataValues;
        })
      })
      res.json(formattedLipsync);
    })
    .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getSeasonLipsyncs;
