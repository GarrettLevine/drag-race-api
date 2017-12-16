const { errorHandler: eh } = require('utils');

function queryLimit(req, res, next) {
  if (req.query.limit && !Number(req.query.limit)) {
    res.status(400).json(eh.typeMissMatch('limit', 'number', Number(req.query.limit)));
    return;
  }
  if (req.query.limit && req.query.limit > 50) {
    res.status(400).json(eh.requestLimit(req.query.limit));
    return;
  }

  next();
}

module.exports = queryLimit;