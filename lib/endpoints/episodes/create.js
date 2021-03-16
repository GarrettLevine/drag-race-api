const {
  Episode,
  Queen,
  QueensEpisodes,
} = require('models');

function create(req, res) {
  let episode;

  return Episode.create({
    title: req.body.title,
    episodeInSeason: req.body.episodeInSeason,
    seasonId: req.body.seasonId,
    airDate: req.body.airDate,
  })
  .then(e => {
    episode = e;
    const queensArray = req.body.queens
      .map(queen => Queen.findByPk(queen.id));

    return Promise.all(queensArray);
  })
  .then(queens => {
    const queensEpisodesArray = req.body.queens
      .map(queen => episode.addQueen(queens.find(q => q.id === queen.id), {
        eliminated: queen.eliminated || false,
      }));
  
    return Promise.all(queensEpisodesArray);
  })
  .then(() => res.json(episode))
  .catch(err => {
    console.log(err);
    res.json(err)
  });
}

module.exports = create;
