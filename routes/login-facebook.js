import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import express from 'express';

const router = express.Router();

passport.use(new FacebookStrategy({
        clientID: process.env['FACEBOOK_CLIENT_ID'],
        clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
        callbackURL: '/return'
    },
    (accessToken, refreshToken, profile, cb) => {
        return cb(null, profile);
    }));

router.post('/facebook-login', passport.authenticate('facebook', {session: false}),
    (req, res) => {
        res.json(req.user);
    });

export default router;