const {
  Season,
  Queen,
} = require('models');

function getWinners(req, res) {
  let queenWinners;
  return Queen.findAll({
    where: {
      winner: true,
    },
    include: [{
      model: Season,
      through: {
        attributes: ['place'],
      },
    }],
  })
  .then(queens => res.json(queens))
  .catch(err => res.json(err));
}

module.exports = getWinners;