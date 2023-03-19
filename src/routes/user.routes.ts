import { Router } from 'express';
import UserController from '../controller/user.controller';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/users', userController.create);

export default userRouter;