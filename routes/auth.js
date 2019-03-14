import express from 'express';
import UserRepository from '../models/user-repository';
import jwt from 'jsonwebtoken';

const router = express.Router();
const repository = new UserRepository();

router.post('/auth', (req, res) => {
    const user = repository.findByLogin(req.body.login);

    if (user === undefined || user.password !== req.body.password)
        res.status(401).json({
            'code': 401,
            'message': 'Bad user/password combination.'
        });
    else {
        const payload = {login: user.login, username: user.name};
        const token = jwt.sign(payload, 'secret', {expiresIn: 60});
        res.status(200)
            .json({
                'code': 200,
                'message': 'OK',
                'data': {
                    'user': payload
                },
                'token': token
            });
    }
});

export default router;