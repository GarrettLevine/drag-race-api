const {
  Queen,
  Season,
} = require('models');

function create(req, res) {
  let queen;

  return Queen.create({
    name: req.body.name,
    missCongeniality: req.body.missCongeniality,
    winner: req.body.winner,
    quote: req.body.quote,
    image_url: req.body.image_url,
  })
  .then(q => {
    queen = q;
    const seasonArray = req.body.seasons
      .map(season => Season.findByPk(season.id));

    return Promise.all(seasonArray);
  })
  .then(seasons => {
    const queenSeasonsArray = req.body.seasons
      .map(season => queen.addSeason(seasons.find(s => s.id === season.id), {
        place: season.place,
      }));
    
    return Promise.all(queenSeasonsArray);
  })
  .then(() => res.json(queen))
  .catch(err => res.json(err));
}

module.exports = create;
