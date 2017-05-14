const q = {};

q.getQueens = require(`./get-queens`);
q.getQueenById = require(`./get-queen-by-id`);
q.getWinners = require(`./get-winners`);

q.create = require(`./create`);
q.delete = require(`./delete`);
q.update = require(`./update`);

module.exports = q;
