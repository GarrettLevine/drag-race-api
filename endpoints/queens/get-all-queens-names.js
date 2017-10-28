const { Queen } = require('models');
const { errorHandler: eh } = require('utils');

function getAllQueenNames(req, res) {
    return Queen.findAll()
        .then(queens => {
            const queenArray = queens.map(q => ({
                name: q.name,
                id: q.id,
            }));
            res.status(200).json(queenArray)
        })
        .catch(err => eh.handleError(err))
}

module.exports = getAllQueenNames;