const { Judge } = require(`models`);

const {
    formatJudgesName,
    errorHandler: eh,
  } = require(`utils`);

function getAllJudgesNames(req, res) {
    console.log(true)
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
        console.log(err)
        eh.handleError(err)
    })
}

module.exports = getAllJudgesNames;
