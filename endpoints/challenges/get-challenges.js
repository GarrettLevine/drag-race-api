const { Challenge } = require('models');

const {
  formatQueen,
  errorHandler: eh,
} = require('utils');

function getChallenges(req, res) {
  return Challenge.findAll({
    limit: req.query.limit || 20,
    offset: req.query.offset || 0,
  })
  .then(challenges => {
    const formattedChallenges = 
    res.status(200).json(challenges)
  })
  .catch(err => res.json(eh.serverError()));
}

module.exports = getChallenges;