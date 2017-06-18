const formatSeason = season => {
  if (typeof season !== 'object') return {};

  return {
    id: season.id,
    seasonNumber: season.seasonNumber,
    winnerId: season.winnerId,
    image_url: season.image_url,
    queens: season.Queens.map(queen => ({
      id: queen.id,
      name: queen.name,
      place: queen.QueensSeasons.place,
    })),
  };
};

module.exports = formatSeason;
