const {
    Season,
    Judge,
    Episode,
} = require('models');

const {
  formatJudge,
  errorHandler: eh,
} = require('utils');

function getSeasonsJudges(req, res) {
    return Season.findById(req.params.id)
        .then(season => {
            if (!season) eh.noSeasonWithId(req.params.id);

            return season.getEpisodes();
        })
        .then(episodes => {
          console.log('episodes', episodes)
            return Judge.findAll({
                where: {
                    id: episodes.map(e => e.id),
                },
                include: [{
                    model: Episode,

                }],
            });
        })
        .then(judges => {
            if (!judges.length) return Promise.reject(eh.noJudgeWithId(req.params.id));
            console.log('judges', judges)
            const formattedJudge = judges.map(c => formatJudge(c));
            res.status(200).json(formattedJudge);
        })
        .catch(err => {
          console.log('******************', err)
          return res.json(eh.handleError(err))});
}

module.exports = getSeasonsJudges;
