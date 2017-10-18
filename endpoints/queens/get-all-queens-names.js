const { Queen } = require('models');
const { errorHandler: eh } = require('utils');

function getAllQueenNames(req, res) {
    return Queen.findAll()
        .then(queens => {
            const nameArray = queens.map(q => q.name);
            res.status(200).json(nameArray)
        })
        .catch(err => eh.handleError(err))
}

module.exports = getAllQueenNames;