const s = {};

s.getSeasons = require('./get-seasons');
s.getSeasonById = require('./get-season-by-id');
s.getSeasonQueens = require(`./get-season-queens`);

s.create = require(`./create`);
s.createFull = require(`./create-full`);

module.exports = s;
