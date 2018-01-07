const express = require(`express`);
const passport = require(`passport`);

const userEndpoints = require(`endpoints/users`);

const router = express.Router();

router.route(`/register`)
    .post(passport.authenticate(`register`, { session: false }), userEndpoints.register);
router.route(`/login`)
    .post(passport.authenticate(`login`, { session: false }), userEndpoints.login);

module.exports = router;
