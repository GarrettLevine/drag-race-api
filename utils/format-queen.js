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

  if (q.Challenges) {
    queen.challenges = q.Challenges.map(challenge => ({
      challengeId: challenge.id,
      won: challenge.QueensChallenges.won,
    }));
  }

  if (q.Lipsyncs) {
    queen.lipsyncs = q.Lipsyncs.map(lipsync => ({
      lipsyncId: lipsync.id,
      won: lipsync.QueensLipsyncs.won,
    }));
  }

  return queen;
};

module.exports = formatQueen;