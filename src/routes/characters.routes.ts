import { NextFunction, Request, Response, Router } from "express";
import controller from "../controllers/characters.controller";

const router = Router();

router.get("/:id?", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    res.status(200).json(await controller.getCharacters(id));
  } catch (error: any) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(await controller.addCharacter(req.body));
  } catch (error: any) {
    next(error);
  }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    res.status(200).json(await controller.updateCharacter(id, req.body));
  } catch (error: any) {
    next(error);
  }
});

router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    res.status(200).json(await controller.deleteCharacter(id));
  } catch (error: any) {
    next(error);
  }
});

export default router;
