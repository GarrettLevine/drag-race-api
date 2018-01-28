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
  let newChallenges;
  let newLipsyncs;

  db.transaction((transaction) => {
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
            transaction,
          });
        }));
      })
      .then(() => Promise.all(req.body.challenges.map((c) => {
        return Challenge.create({
          type: c.type,
          description: c.description,
          prize: c.prize,
          episodeId: newEpisode.id,
        }, { transaction})
      })))
      .then((nC) => {
        newChallenges = nC;

        return Promise.all(...activeQueens.map((queen) => {
          return newChallenges.map((challenge, i) => {
            return queen.addChallenge(challenge.id, {
              won: req.body.challenges[i].winners.includes(queen.id),
              transaction,
            });
          });
        }));
      })
      .then(() => Promise.all(req.body.lipsyncs.map((lipsync) => {
        return Lipsync.create({
          artist: lipsync.artist,
          name: lipsync.name,
          episodeId: newEpisode.id,
        }, { transaction });
      })))
      .then((nL) => {
        newLipsyncs = nL;

        return Promise.all(...newLipsyncs.map((lipsync, i) => {
          return req.body.lipsyncs[i].queens.map(queenId => {
            return lipsync.addQueen(queenId, {
              won: req.body.lipsyncs[i].winners.includes(queenId),
              transaction,
            })
          });
        }));
      })
      .catch(() => transaction.rollback());
  })
  .then(() => {
    res.status(200).json({
      data: {
        newChallenges,
        newEpisode,
        newLipsyncs,
      },
    })
  })
  .catch((err) => {
    res.status(500).json(eh.handleError(err));
  })

}

module.exports = createFull;