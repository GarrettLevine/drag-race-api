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

  if (q.Challenges) {
    queen.challenges = q.Challenges.map(challenge => formatChallenge(challenge));
  }

  if (q.Episodes) {
    queen.episodes = q.Episodes.map(episode => formatEpsiodes(episode));
  }

  if (q.Lipsyncs) {
    queen.lipsyncs = q.Lipsyncs.map(lipsync => formatLipsync(lipsync));
  }

  if (q.Seasons) {
    queen.seasons = q.Seasons.map(season => formatSeasons(season));
  }

  return queen;
};

function formatChallenge(c) {
  return {
    id: c.id,
    type: c.type,
    description: c.description,
    won: c.QueensChallenges.won,
  };
}

function formatLipsync(l) {
  return {
      lipsyncId: l.id,
      won: l.QueensLipsyncs.won,
      name: l.name,
      artist: l.artist,
  };
}

function formatSeasons(s) {
  return {
    seasonNumber: s.seasonNumber,
    id: s.id,
    place: s.QueensSeasons.place,
  };
}

function formatEpsiodes(e) {
  return {
    id: e.id,
    seasonId: e.seasonId,
    episodeInSeason: e.episodeInSeason,
    title: e.title,
    airDate: e.airDate,
  };
}

module.exports = formatQueen;