function queryLimit(req, res, next) {
  if (req.query.limit && req.query.limit > 50) {
    res
      .status(400)
      .json({
        error: {
          message: 'Request limit is 50. You requested ${req.query.limit',
        }
      });
    return;
  }

  next();
}

module.exports = queryLimit;