import { Router } from "express";
import { merchantSignin, merchantSignup } from "../controllers/merchantController";

export const merchantRoutes = Router();

merchantRoutes.post('/singup',merchantSignup);
merchantRoutes.post('/signin',merchantSignin);