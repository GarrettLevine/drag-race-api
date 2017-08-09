const { Judge } = require(`models`);

const {
  formatJudge,
  errorHandler: eh,
} = require(`utils`);

function getJudges(req, res) {
  return Judge.findAll({
    limit: req.query.limit || 20,
    offset: req.query.offset || 0,
  })
  .then(judges => {
    const formattedJudges = judges.map(judge => formatJudge(judge));
    res.json(formattedJudges);
  })
  .catch(err => res.status(400).json(eh.serverError()));
}

module.exports = getJudges;
