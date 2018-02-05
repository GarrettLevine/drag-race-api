const {
  db,
  Challenge,
  Episode,
  Judge,
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
  let newJudges;

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

        const promiseArray = [];
        newLipsyncs.forEach((lipsync, i) => {
          req.body.lipsyncs[i].queens.forEach((q) => {
            promiseArray = promiseArray.concat(
              lipsync.addQueen(q.Id, {
              won: q.won || false,
              transaction,
            }));
          });
        });

        return Promise.all(promiseArray);
      })
      .then(() => Promise.all(req.body.newJudges.map((j) => {
        return Judge.create({
          name: j.name,
          image_url: j.image_url,
          bio: j.bio,
          type: j.type,
        }, { transaction });
      })))
      .then((nJ) => {
        newJudges = nJ;
        return Judge.findAll({
          where: {
            id: req.body.existingJudges,
          },
          transaction,
        });
      })
      .then((eJ) => {
        return Promise.all([
          ...newJudges.map((judge) => judge.addEpisode(newEpisode.id, { transaction })),
          ...eJ.map((judge) => judge.addEpisode(newEpisode.id, { transaction })),
        ]);
      })
      .catch((err) => {
        console.log({ err });
        return transaction.rollback()
      });
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
    console.log(err);
    res.status(500).json(eh.handleError(err));
  })
}

module.exports = createFull;