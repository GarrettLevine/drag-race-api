const e = {};

e.getJudges = require(`./get-judges`);
e.getJudgeById = require(`./get-judge-by-id`);
e.getEpisodeJudges = require(`./get-episode-judges`);
e.getSeasonJudges = require(`./get-season-judges`);
e.getAllJudgesNames = require(`./get-all-judges-names`);
e.create = require(`./create`);

module.exports = e;
