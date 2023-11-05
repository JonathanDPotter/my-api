import { NextFunction, Request, Response } from "express";
import query from "../db/utils";

const logger = (req: Request, _res: Response, next: NextFunction) => {
  const { method, url } = req;
  const dateLog = new Date(Date.now()).toLocaleString();

  console.log(
    `\x1b[33m[${method}]\x1b[0m`,
    `path:\x1b[34m"${url}"\x1b[0m`,
    dateLog
  );
  query("INSERT INTO logs SET ?", [
    { Request: `[${method}] path: ${url} - ${dateLog}` },
  ]);
  next();
};

export default logger;
