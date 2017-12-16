const {
  Challenge,
  Queen,
} = require('models');

const {
  formatChallenge,
  errorHandler: eh,
} = require('utils');

function getChallenges(req, res) {
  return Challenge.findAll({
    limit: req.query.limit || 20,
    offset: req.query.offset || 0,
    include: [{
      model: Queen,
      through: {
        attributes: ['won'],
      }
    }],
  })
  .then(cs => {
    const formattedChallenges = cs.map(c => formatChallenge(c));
    res.status(200).json(formattedChallenges);
  })
  .catch(err => res.json(eh.handleError(err)));
}

module.exports = getChallenges;