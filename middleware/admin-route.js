function adminRoute(req, res, next) {
  if (req.query.admin === process.env.ADMIN_CODE) {
    next();
    return;
  }

  res
    .status(400)
    .jsom({
      error: {
        message: 'you must have an admin key.'
      }
    });

  return;
}