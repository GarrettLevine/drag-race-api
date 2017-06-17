const formatQueen = (queen) => {
  if (typeof queen !== 'object') return {};

  return {
    name: queen.name,
    winner: queen.winner,
    missCongeniality: queen.missCongeniality,
    seasons: queen.Seasons.map(season => ({
      seasonNumber: season.seasonNumber,
      seasonId: season.id,
      place: season.QueensSeasons.place,
    })),
  };
}

module.exports = formatQueen;