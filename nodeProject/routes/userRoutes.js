import express from 'express';

import {
 register,
 login
} from '../service/user';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/auth', login);



export default userRouter;