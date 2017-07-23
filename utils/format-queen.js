const formatQueen = queen => {
  if (typeof queen !== 'object') return {};

  return {
    id: queen.id,
    name: queen.name,
    winner: queen.winner,
    missCongeniality: queen.missCongeniality,
    image_url: queen.image_url,
    quote: queen.quote,
    seasons: queen.Seasons.map(season => ({
      seasonNumber: season.seasonNumber,
      seasonId: season.id,
      place: season.QueensSeasons.place,
    })),
  };
};

module.exports = formatQueen;