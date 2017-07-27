const { errorHandler: eh } = require('utils');

function offsetCheck(req, res, next) {
  if (req.query.offset && !Number(req.query.offset)) {
    res.status(400).json(eh.typeMissMatch('offset', 'number', Number(req.query.offset)));
    return;
  }

  next();
}

module.exports = offsetCheck;
