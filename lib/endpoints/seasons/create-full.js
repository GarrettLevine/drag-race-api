const {
  db,
  Queen,
  Season,
} = require(`models`);

const { errorHandler: eh } = require(`utils`);

function createFull(req, res) {
  const { seasonNumber, year, image_url, queens } = req.body;
  let newSeason;
  let seasonQueens = [];

  db.transaction(transaction => {
    return Season.findAll({ where: { seasonNumber: seasonNumber }, raw: true })
      .then(season => {
        if (season != ``) return Promise.reject(eh.seasonAlreadyExists(seasonNumber, season[0].id));
      
        return Season.create({
          seasonNumber: seasonNumber,
          year: year,
          image_url: image_url,
        }, { transaction });
    })
    .then(s => {
      newSeason = s;
      queens.forEach(async queen => {
        try {
          const existingQueen = await Queen.findAll({ where: { name: queen.name }, transaction});
          if (existingQueen != ``) {
            console.log(existingQueen);
            return [...seasonQueens, existingQueen];
          }
          
          const newQueen = await Queen.create({
            name: queen.name,
            quote: queen.quote,
            image_url: queen.image_url,
          }, { transaction });
          console.log(seasonQueens);
          return [...seasonQueens, newQueen];
        } catch(err) {
          console.log(err);
        }
      });
    })
    .then(season => {
      res.status(200).json(season);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(eh.handleError(err));
    });
  });
}

module.exports = createFull;
