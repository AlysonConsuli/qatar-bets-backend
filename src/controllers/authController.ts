import { Request, Response } from "express";

import * as authService from "../services/authService.js";
import { UserInsertData } from "../interfaces/createData.js";

export const signup = async (req: Request, res: Response) => {
  const user: UserInsertData = req.body;
  await authService.signup({ name: user.name, password: user.password });
  res.sendStatus(201);
};

export const signin = async (req: Request, res: Response) => {
  const user: UserInsertData = req.body;
  const token = await authService.signin(user);
  res.send({ name: user.name, token });
};

export const autologin = async (req: Request, res: Response) => {
  res.sendStatus(200);
};

export const adminlogin = async (req: Request, res: Response) => {
  const userName: string = res.locals.user.name;
  await authService.adminlogin(userName);
  res.sendStatus(200);
};
