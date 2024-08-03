import express from 'express';
import { userSignin, userSignup } from '../controllers/userController';

export const userRoutes = express.Router();

userRoutes.get('/signin', userSignin)
userRoutes.post('/signup',userSignup)
