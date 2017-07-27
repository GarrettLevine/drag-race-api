const { errorHandler: eh } = require('utils');

function adminRoute(req, res, next) {
  if (req.query.admin === process.env.ADMIN_CODE) {
    next();
    return;
  }

  res.status(400).json(eh.adminCode());
  return;
}

module.exports = adminRoute;