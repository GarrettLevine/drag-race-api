const { Queen } = require('models');
const { 
    formatQueen,
    errorHandler: eh,
} = require('utils');

function getAllQueenNames(req, res) {
    return Queen.findAll({
        order: [
            ['id', 'ASC']
        ],
    })
    .then(queens => {
        const queensArray = queens.map(q => formatQueen(q));
        res.status(200).json(queensArray)
    })
    .catch(err => eh.handleError(err))
}

module.exports = getAllQueenNames;