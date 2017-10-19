const mw = {};

mw.adminRoute = require('./admin-route');
mw.offsetCheck = require('./offset-check');
mw.queryLimit = require('./query-limit');
mw.rateLimit = require('./rate-limit');

module.exports = mw;