import express from 'express';
import productsRouter from './routes/products';
import usersRouter from './routes/users';
import authRouter from './routes/auth';
import checkAuth from './middlewares/check-auth';

const app = express();

app.use(express.json());

app.use('/', authRouter);
app.use('/api', checkAuth());
app.use('/api', productsRouter);
app.use('/api', usersRouter);


export default app;