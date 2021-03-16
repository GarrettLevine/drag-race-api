const {
    Challenge,
    Queen,
} = require('models');

const {
  formatChallenge,
  errorHandler: eh,
} = require('utils');

function getQueenChalenges(req, res) {
    return Queen.findByPk(req.params.id)
        .then(q => q.getChallenges({
            through: {
                attributes: ['won'],
            },
        }))
        .then(cs => {
            if (!cs.length) return Promise.reject(eh.noQueenWithId(req.params.id));

            const formattedChallenge = cs.map(c => formatChallenge(c));
            res.status(200).json(formattedChallenge);
        })
        .catch(err => res.json(eh.handleError(err)));
}

module.exports = getQueenChalenges;
