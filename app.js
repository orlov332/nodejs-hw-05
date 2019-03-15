import express from 'express';
import productsRouter from './routes/products';
import usersRouter from './routes/users';
import authRouter from './routes/auth';
import loginRouter from './routes/login';
import loginFacebookRouter from './routes/login-facebook';
import checkAuth from './middlewares/check-auth';

const app = express();

app.use(express.json());

app.use('/', authRouter);
app.use('/', loginRouter);
app.use('/', loginFacebookRouter);
app.use('/api', checkAuth());

app.use('/api', productsRouter);
app.use('/api', usersRouter);


export default app;