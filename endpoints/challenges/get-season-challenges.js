const {
    Challenge,
    Season,
    Queen,
} = require('models');

const {
  formatChallenge,
  errorHandler: eh,
} = require('utils');

function getSeasonsByChallenges(req, res) {
    return Season.findById(req.params.id)
        .then(season => {
            if (!season) eh.noSeasonWithId(req.params.id);

            return season.getEpisodes();
        })
        .then(episodes => {
            return Challenge.findAll({
                where: {
                    episodeId: episodes.map(e => e.id),
                },
                include: [{
                    model: Queen,
                    through: {
                        attributes: ['won'],
                    },
                }],
            });
        })
        .then(challenges => {
            if (!challenges.length) return Promise.reject(eh.noQueenWithId(req.params.id));
            
            const formattedChallenge = challenges.map(c => formatChallenge(c));
            res.status(200).json(formattedChallenge);
        })
        .catch(err => res.json(eh.handleError(err)));
}

module.exports = getSeasonsByChallenges;
