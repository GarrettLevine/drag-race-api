const {
    Challenge,
    Queen,
} = require('models');

const {
  formatChallenge,
  errorHandler: eh,
} = require('utils');

function getEpisodeChallenges(req, res) {
        return Challenge.findAll({
            where: {
                episodeId: req.params.id,
            },
            include: [{
                model: Queen,
                through: {
                    attributes: ['won'],
                },
            }],
        })
        .then(cs => {
            if (!cs.length) return Promise.reject(eh.noEpisodeWithId(req.params.id));

            const formattedChallenge = cs.map(c => formatChallenge(c));
            res.status(200).json(formattedChallenge);
        })
        .catch(err => res.json(eh.handleError(err)));
}

module.exports = getEpisodeChallenges;
