import passport from 'passport';
import LocalStrategy from 'passport-local';
import express from 'express';
import UserRepository from '../models/user-repository';

const router = express.Router();
const repository = new UserRepository();

passport.use('local', new LocalStrategy({usernameField: 'login', session: false},
    (username, password, done) => {
        const user = repository.findByLogin(username);
        if (user === undefined || user.password !== password)
            done(null, false, 'Bad username/password combination');
        else
            done(null, user);
    }));

router.post('/login', passport.authenticate('local', {session: false}),
    (req, res) => {
        res.json({token: req.user.token});
    });

export default router;