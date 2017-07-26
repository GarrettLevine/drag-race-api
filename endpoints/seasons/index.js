const s = {};

s.create = require('./create');
s.getSeasons = require('./get-seasons');
s.getSeasonById = require('./get-season-by-id');
s.getSeasonQueens = require(`./get-season-queens`);

module.exports = s;
