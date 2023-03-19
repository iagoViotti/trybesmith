import express from 'express';
import producstRouter from './routes/products.routes';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use(producstRouter);

app.use(userRouter);

export default app;
