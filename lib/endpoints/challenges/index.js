const c = {};

c.getChallenges = require('./get-challenges');
c.getChallengeById = require('./get-challange-by-id')
c.getQueenChallenges = require('./get-queens-challenges');
c.getEpisodeChallenges = require('./get-episode-challenges');
c.getSeasonChallenges = require('./get-season-challenges');
c.create = require('./create');

module.exports = c;
