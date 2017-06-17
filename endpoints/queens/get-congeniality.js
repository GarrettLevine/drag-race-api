const {
    Season,
    Queen,
} = require('models');

function getCongeniality(req, res) {
  return Queen.findAll({
    where: {
      missCongeniality: true,
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

module.exports = getCongeniality;