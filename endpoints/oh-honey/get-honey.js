const sequelize = require(`sequelize`);

const { OhHoney } = require(`models`);

const {
  formatOhHoney,
  errorHandler: eh,
} = require(`utils`);

function getOhHoney(req, res) {
  return OhHoney.findAll({
    order: [
      [sequelize.fn('RANDOM')]
    ],
    limit: 1,
  })
  .then(ohHoney => {
    const formattedHoney = ohHoney.map(honey => formatOhHoney(honey));
    res.status(200).json(formattedHoney);
  })
  .catch(err => res.status(500).json(eh.handleError(err)));
}

module.exports = getOhHoney;
