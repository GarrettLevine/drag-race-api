const {
  Season,
  Queen,
} = require('models');

function getQueens(req, res) {
  let queens;

  return Queen.findAll({
    limit: req.params.limit || 20,
    offset: req.params.offset || 0,
    include: [{
      model: Season,
      through: {
        attributes: ['place'],
      },
    }],
  })
  .then(queens => {
    res.json(queens);
  })
  .then(err => {
    res.json(err);
  });
}

module.exports = getQueens;
