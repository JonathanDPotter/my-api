import { Request, Response } from "express";

const errorHandler = (err: Error, _req: Request, res: Response) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
};

export default errorHandler;
