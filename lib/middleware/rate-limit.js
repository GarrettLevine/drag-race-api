const RateLimit = require('express-rate-limit');

var limiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes 
  max: 1500, // limit each IP to 100 requests per windowMs 
  delayMs: 0, // disable delaying - full speed until the max limit is reached 
  message: 'Too many requests, please try again later.',
});

module.exports = limiter;
