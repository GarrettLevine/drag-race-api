const { Episode, Judge } = require("models");

const { formatJudge, errorHandler: eh } = require("utils");

function getEpisodeJudges(req, res) {
  return Episode.findById(req.params.id, {
    include: [
      {
        model: Judge
      }
    ]
  })
    .then(cs => {
      if (!cs) return Promise.reject(eh.noEpisodeWithId(req.params.id));
      const formattedJudges = cs.Judges.map(judge => formatJudge(judge))
      res.status(200).json(formattedJudges);
    })
    .catch(err => {
      return res.json(eh.handleError(err));
    });
}

module.exports = getEpisodeJudges;
