const {
  Episode,
  Season,
  Judge,
} = require('models');

const {
  formatJudge,
  errorHandler: eh,
} = require('utils')

function getJudgeById(req, res) {
  const { id } = req.params;

  return Judge.findById(id, {
      include: [
        {
          model: Episode,
          // through: {
          //   attributes: ['EpisodesJudges'],
          // }
         },
      ],
    })
    .then(judge => {
      if (!judge) return Promise.reject(eh.noJudgeWithId(id));
      res.json(formatJudge(judge));
    })
    .catch(err => {
      console.log({ err });
      res.status(400).json(eh.handleError(err))
    });
}

module.exports = getJudgeById;
