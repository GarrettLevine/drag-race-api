const { Judge } = require(`models`);

const {
    formatJudgesName,
    errorHandler: eh,
  } = require(`utils`);

function getAllJudgesNames(req, res) {
    return Judge.findAll({
        order: [
            ['id', 'ASC']
        ],
    })
    .then(judges => {
        const judgesArray = judges.map(q => formatJudgesName(q));
        res.status(200).json(judgesArray)
    })
    .catch(err => {
        res.status(500).json(eh.handlerErr(err));
    })
}

module.exports = getAllJudgesNames;
