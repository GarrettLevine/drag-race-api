const l = {};

l.getLipsyncs = require(`./get-lipsyncs`);
l.getLipsyncById = require(`./get-lipsync-by-id`);
l.getQueenLipsyncs = require(`./get-queen-lipsyncs`);
l.getEpisodeLipsyncs = require(`./get-episode-lipsyncs`);
l.getSeasonLipsyncs = require(`./get-season-lipsyncs`);

l.create = require(`./create`);

module.exports = l;
