const { Season, Judge, Episode } = require("models");
const _ = require("lodash");

const { formatJudge, errorHandler: eh } = require("utils");

function getSeasonsJudges(req, res) {
  return Season.findById(req.params.id)
    .then(season => {
      if (!season) eh.noSeasonWithId(req.params.id);

      return season.getEpisodes();
    })
    .then(episodes => {
      return Promise.all(episodes.map(episode => episode.getJudges()));
    })
    .then(judges => {
      let flatArray = [];
      judges.forEach(eJudges => {
        flatArray = [...flatArray, ...eJudges];
      });
      const unique = _.uniqBy(flatArray, 'id')
      if (!judges.length)
        return Promise.reject(eh.noJudgeWithId(req.params.id));
      const formattedJudge = unique.map(j => {
        return formatJudge(j.dataValues);
      });
      console.log('form at', formattedJudge)
      res.status(200).json(formattedJudge);
    })
    .catch(err => {
      return res.json(eh.handleError(err));
    });
}

module.exports = getSeasonsJudges;
