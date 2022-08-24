import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export default (req: Request, res: Response, next: NextFunction): void => {
  next();
};
