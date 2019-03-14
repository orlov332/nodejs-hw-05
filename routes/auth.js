import express from 'express';
import UserRepository from '../models/user-repository';

const router = express.Router();
const repository = new UserRepository();

router.post('/auth', (req, res) => {
    const user = repository.findByLogin(req.body.login);

    res.status(200)
        .json(repository.fetchAll());
});

export default router;