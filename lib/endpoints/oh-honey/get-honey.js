const sequelize = require(`sequelize`);

const { OhHoney } = require(`models`);

const {
  formatHoney,
  errorHandler: eh,
} = require(`utils`);

function getHoney(req, res) {
  return OhHoney.findAll({
    order: [
      [sequelize.fn('RANDOM')]
    ],
    limit: 1,
  })
  .then(honey => {
    const formattedHoney = honey.map(quote => formatHoney(quote));
    res.status(200).json(formattedHoney);
  })
  .catch(err => res.status(500).json(eh.handleError(err)));
}

module.exports = getHoney;
