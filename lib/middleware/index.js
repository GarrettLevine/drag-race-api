const mw = {};

mw.adminRoute = require('./admin-route');
mw.cors = require('./cors');
mw.offsetCheck = require('./offset-check');
mw.queryLimit = require('./query-limit');
mw.rateLimit = require('./rate-limit');
mw.passport = require(`./passport`);

module.exports = mw;
