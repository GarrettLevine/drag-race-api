const {
    Challenge,
    Queen,
} = require('models');

const {
  formatChallenge,
  errorHandler: eh,
} = require('utils');

function getChallengeById(req, res) {
    return Challenge.findById(req.params.id, {
        include: [{
            model: Queen,
            through: {
                attributes: ['won'],
              },
        }],
    })
    .then(challenge => {
        const formattedChallenge = formatChallenge(challenge);
        res.status(200).json(formattedChallenge);
    })
    .catch(err => res.json(eh.handleError(err)));
}

module.exports = getChallengeById;