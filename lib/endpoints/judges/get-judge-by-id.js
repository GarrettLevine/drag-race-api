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

  return Judge.findByPk(id, {
      include: [
        {
          model: Episode,
         },
      ],
    })
    .then(judge => {
      if (!judge) return Promise.reject(eh.noJudgeWithId(id));
      res.json(formatJudge(judge));
    })
    .catch(err => {
      res.status(400).json(eh.handleError(err))
    });
}

module.exports = getJudgeById;
