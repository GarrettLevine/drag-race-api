const formatChallenges = challenge => {
  const c = {
    id: challenge.id,
    type: challenge.type,
    description: challenge.description,
    prize: challenge.prize,
    episodeId: challenge.episodeId,
  };

  if (challenge.Queens) {
    c.queens = challenge.Queens.map(queen => {
      return {
        id: queen.id,
        name: queen.name,
        won: queen.QueensChallenges.won,
      };
    });
  }

  if (challenge.QueensChallenges) {
    c.won = challenge.QueensChallenges.won;
  }

  return c;
}

module.exports = formatChallenges;