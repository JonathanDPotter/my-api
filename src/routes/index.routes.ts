import { NextFunction, Request, Response, Router } from "express";
import path from "path";
import routes from "./routes.json";
import characterRoutes from "./characters.routes";
import requestRoutes from "./requests.routes";

const router = Router();

router.get("/", (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.sendFile(path.join(__dirname, "../static/index.html"));
  } catch (error: any) {
    next(error);
  }
});

router.get("/home", (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.redirect("/");
  } catch (error: any) {
    next(error);
  }
});

router.get(
  "/add-character",
  (_req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendFile(path.join(__dirname, "../static/addCharacter.html"));
    } catch (error: any) {
      next(error);
    }
  }
);

router.get("/about", (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.sendFile(path.join(__dirname, "../static/about.html"));
  } catch (error: any) {
    next(error);
  }
});

router.get(
  "/healthcheck",
  (_req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200);
    } catch (error: any) {
      next(error);
    }
  }
);

router.get("/routes", (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(routes);
  } catch (error: any) {
    next(error);
  }
});

// add api routes

router.use("/api/characters", characterRoutes);
router.use("/api/requests", requestRoutes);

router.all("*", (_req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, "../static/404.html"));
});

export default router;
