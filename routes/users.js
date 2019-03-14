import express from 'express';
import UserRepository from '../models/user-repository';

const router = express.Router();
const repository = new UserRepository();

router.get('/users', (req, res) => {
    res.status(200)
        .json(repository.fetchAll());
});

export default router;