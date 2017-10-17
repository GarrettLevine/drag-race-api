const formatChallenges = challenge => {
  return {
    id: challenge.id,
    type: challenge.type,
    description: challenge.description,
    prize: challenge.prize,
    episodeId: challenge.episodeId,
    queens: challenge.Queens.map(queen => {
      return {
        id: queen.id,
        name: queen.name,
        won: queen.QueensChallenges.won,
      };
    }),
  };
}

module.exports = formatChallenges;