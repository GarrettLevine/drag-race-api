import { fetch } from '../../utils';

export default function adminSetup() {
  let seasonId;
  return fetch.get('/api/seasons')
    .then((seasons) => {
      seasonId = seasons.sort((a, b) => b.id - a.id)[0].id; 
      return fetch.get(`/api/seasons/${seasonId}/queens`)
    })
    .then((queens) => Promise.all(queens.map((q) => fetch.get(`/api/queens/${q.id}`))))
    .then((queens) => {
      let activeQueens = [];
      let inactiveQueens = [];

      // mutates the queens array returns and filters out all episodes from non-relavant seasons
      queens.forEach((q, i) => {
        queens[i].episodes = q.episodes.filter((e) => e.seasonId === seasonId);
      });

      const sortedQueens = queens.sort((a, b) => b.episodes.length - a.episodes.length)
      const count = sortedQueens[0].episodes.length;

      sortedQueens.forEach((q) => {
        if (q.episodes.length !== count) {
          inactiveQueens = inactiveQueens.concat(q);
          return;
        }

        activeQueens = activeQueens.concat(q);
      });

      return {
        activeQueens,
        inactiveQueens,
        seasonId,
      };
    });
}