const { Queen } = require('models');

function update(req, res) {
  return Queen.findById(req.params.id)
    .then(queen => queen.update({
      name: req.body.name || queen.name,
      image_url: req.body.image_url || queen.image_url,
      winner: req.body.winner || queen.winner,
      quote: req.body.quote || queen.quote,
    }))
    .then(queen => res.json(queen))
    .catch(err => res.json(err));
}

module.exports = update;
