const { Queen } = require('models');

function create(req, res) {
  let queenId;
  return Queen.create({
    name: req.body.name,
    winner: req.body.winner,
    quote: req.body.quote,
    image_url: req.body.image_url,
  })
  .then(queen => {
    queenId = queen.od;
    const promiseArray = req.body.season
      .map(season => queen.addSeason({
        seasonId: season.id,
        place: season.place,
      }));

    return Promise.all(promiseArray);
  })
  .then(() => Queen.findByID(queenId))
  .then(queen => res.json(queen))
  .catch(err => res.json(err));
}

module.exports = create;
