const { Queen } = require(`models`);

function deleteQueen(req, res) {
  return Queen.findById(req.params.id)
    .then(queen => queen.destroy())
    .then(queen => res.json({ message: `${queen.name} deleted` }))
    .catch(err => res.json(err));
}

module.exports = deleteQueen;