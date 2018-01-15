import { fetch } from '../../utils';

export default function sortQueens(seasonId) {
  return fetch.get(`/api/seasons/${seasonId}/queens`)
  .then((queens) => Promise.all(queens.map((q) => fetch.get(`/api/queens/${q.id}`))))
  .then((queens) => {
    let count;
    let activeQueens = [];
    let inactiveQueens = [];

    queens.forEach((q, i) => {
      queens[i].episodes = q.episodes.filter((e) => e.seasonId === seasonId);
    });

    const sortedQueens = queens.sort((a, b) => b.episodes.length - a.episodes.length)
    count = sortedQueens[0].episodes.length;

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
    };
  });
}