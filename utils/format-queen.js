const formatQueen = q => {
  if (typeof q !== 'object') return {};

  const queen = {
    id: q.id,
    name: q.name,
    winner: q.winner,
    missCongeniality: q.missCongeniality,
    image_url: q.image_url,
    quote: q.quote,
  };

  if (q.Seasons) {
    queen.seasons = q.Seasons.map(season => ({
      seasonNumber: season.seasonNumber,
      seasonId: season.id,
      place: season.QueensSeasons.place,
    }));
  }

  return queen;
};

module.exports = formatQueen;