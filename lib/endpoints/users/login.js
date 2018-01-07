const JWT = require(`jsonwebtoken`);

const { User } = require(`models`);

async function login(req, res) {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        // if (!user) {
        //     return res.redirect(`/login`);
        // }

        const token = await JWT.sign({
            iss: `RuPaul's Drag Race API`,
            sub: user.id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1),
        }, `ohhoney`);

        res.status(200).json(token);
    } catch(err) {
        return res.status(500).json(err);
    }
};

module.exports = login;
