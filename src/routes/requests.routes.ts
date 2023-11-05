import { Request, Response, NextFunction, Router } from "express";
import controller from "../controllers/requests.controller";

const router = Router();

router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json(await controller.getAllRequests());
  } catch (error: any) {
    next(error);
  }
});

export default router;
