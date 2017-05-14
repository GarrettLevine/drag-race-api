const { Queen } = require('models');

function getWinners(req, res) {
  let queenWinners;
  return Queen.findAll({
    where: {
      winner: true,
    },
  })
  .then(queens => res.json(queens))
  .catch(err => res.json(err));
}

module.exports = getWinners;