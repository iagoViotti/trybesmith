import express from 'express';
import producstRouter from './routes/products.routes';
import userRouter from './routes/user.routes';
import ordersRouter from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use(producstRouter);

app.use(userRouter);

app.use(ordersRouter);

export default app;
