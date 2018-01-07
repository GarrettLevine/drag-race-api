const JWT = require(`jsonwebtoken`);

const { User } = require(`models`);

const { errorHandler: eh } = require(`utils`);

async function register(req, res, done) {
    try {
        res.status(200).json({ message: `You registered!` });
    } catch(err) {
        res.status(500).json(err);
    }
};

module.exports = register;
