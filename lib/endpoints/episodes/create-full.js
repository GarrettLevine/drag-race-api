const {
  db,
  Challenge,
  Episode,
  Lipsync,
  Queen,
  Season,
} = require('models');

const { eh: errorHandler } = require('utils');

function createFull(req, res) {
  const { seasonId, episodeInfo, queens, challenges, judges } = req.body;
  let newEpisode;
  let activeQueens;

  db.transaction((transaction) => {
    if (!seasonId || typeof seasonID !== 'number') {
      return Promise.reject('season ID was not a number');
    }

    Season.findById(seasonId, { transaction })
      .then((s) => {
        if (!s) return Promise.reject(eh.noSeason(req.params.id));

        return s.getEpisodes({ transaction });
      .then((episodes)  => {
        return Episode.create({
          title: episodeInfo.title,
          episodeInSeason: episodes.length + 1,
          seasonId: seasonId,
          airDate: episodeInfo.airDate,
        }, { transaction });
      })
      .then((e) => {
        newEpisode = e;
        return Promise.all(queens.map((q) => {
          return newEpisode.addQueen(q.id, {
            eliminated: q.eliminated || false
          }, { transaction }),
        });
      })
      .then((qE) => {
        res.status(200).json({
          data: [ newEpisode, qE ],
        });
      })
      .catch((err) => res.status(500).json(eh.errorHandler(err));
  });

}