const { OhHoney } = require(`models`);

const {
  formatHoney,
  errorHandler: eh,
} = require(`utils`);

function getAllHoney(req, res) {
  return OhHoney.findAll()
  .then(honey => {
      const formattedHoney = honey.map(h => formatHoney(h));
      res.status(200).json(formattedHoney);
  })
  .catch(err => res.status(500).json(eh.handleError(err)));
}

module.exports = getAllHoney;
