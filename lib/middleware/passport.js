const passport = require(`passport`);
const bcrypt = require(`bcrypt-nodejs`);
const localStrategy = require(`passport-local`).Strategy;
const jwtStrategy = require(`passport-jwt`).Strategy;
const { ExtractJwt } = require(`passport-jwt`);

const { User } = require(`models`);

const generateHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12));
};

const validatePassword = (enteredPassword, hashedPassword) => {
    return bcrypt.compareSync(enteredPassword, hashedPassword);
} 

passport.use(`register`, new localStrategy({
    usernameField: `email`,
    passwordField: `password`,
    passReqToCallback: true,
}, async (req, email, password, done) => {
    try {
        const existingUser = await User.findOne({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return done(null, false, { message: `Email already in use.` });
        }

        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: email,
            password: generateHash(password),
        });

        if (!newUser) {
            return done(null, false);
        }
        
        return done(null, newUser);
    } catch(err) {
        return done(null, false);
    }
}));

passport.use(`login`, new localStrategy({
    usernameField: `email`,
    passwordField: `password`,
}, async (email, password, done) => {
    try {
        const user = await User.findOne({
            where: {
                email: email,
            },
        });

        if (!user) {
            return done(null, false, { message: `User not found.` });
        }

        const hashedPass = validatePassword(password, user.password);

        if (!hashedPass) {
            return done(null, false, { message: `Incorrect password.` });
        }

        return done(null, user);

    } catch(err) {
        return done(null, false);
    }
}));

passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader(`authorization`),
    secretOrKey: `ohhoney`,
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub);
        if (!user) {
            return done(null, false);
        }
        done(null, user);
    } catch(err) {
        done(err, false);
    }
}));
