const {
  Judge,
  Episode,
} = require(`models`);

const {
  formatJudge,
  errorHandler: eh,
} = require(`utils`);

function getJudges(req, res) {
  return Judge.findAll({
    limit: req.query.limit || 20,
    offset: req.query.offset || 0,
    order: [['id', 'ASC']]
  })
  .then(judges => {
    res.status(200).json(judges);
  })
  .catch(err => res.status(400).json(eh.serverError()));
}

module.exports = getJudges;
