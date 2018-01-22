const {
  db,
  Challenge,
  Episode,
  Lipsync,
  Queen,
  Season,
} = require('models');

const { errorHandler: eh, } = require('utils');

function createFull(req, res) {
  const { seasonId, episodeInfo, queens, challenges, judges } = req.body;
  let newEpisode;
  let activeQueens;
    db.transaction((transaction => {
      return Season.findById(seasonId)
        .then((s) => {
          if (!s) return Promise.reject(eh.noSeason(req.params.id));

          return s.getEpisodes({ transaction });
        }).then((episodes) => {
          return Episode.create({
            title: episodeInfo.title,
            episodeInSeason: episodes.length + 1,
            seasonId: seasonId,
            airDate: episodeInfo.airDate,
          }, { transaction });
        })
        .then((e) => {
          newEpisode = e;
          return Queen.findAll({
            where: {
              id: queens.map((q) => q.id),
            },
            transaction,
          });
        })
        .then((qs) => {
          activeQueens = qs;
          return Promise.all(activeQueens.map((queen) => {
            return queen.addEpisode(newEpisode.id, {
              eliminated: queens.find((q) => q.id === queen.id).eliminated || false,
            }, { transaction });
          }));
        })
        .then(([qE]) => {
          res.status(200).json({
            data: [newEpisode, qe]
          })
        })
        .catch((err) => {
          res.status(500).json(eh.handleError(err))
          return;
        });
    }))

}

module.exports = createFull;