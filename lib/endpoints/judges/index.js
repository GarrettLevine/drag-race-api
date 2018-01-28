const e = {};

e.getJudges = require(`./get-judges`);
e.getJudgeById = require(`./get-judge-by-id`);
e.getEpisodeJudges = require(`./get-episode-judges`);
e.create = require(`./create`);

module.exports = e;

// TODO: create the following endpoints:
// getJudgesSeason
// getJudgesEpisode
