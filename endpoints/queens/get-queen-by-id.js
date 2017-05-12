const { Queen } = require('model');

function getQueenById(req, res) {
  return Queen.findById(req.params.id)
    .then(queen => res.json(queen))
    .catch(err => res.json(err));
}

module.exports = getQueenById;
