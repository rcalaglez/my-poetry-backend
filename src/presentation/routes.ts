import { Router } from "express";
import { CategoryRoutes } from "./category/routes";
import { PoetryRoutes } from "./poetry/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/category", CategoryRoutes.routes);
    router.use("/api/poetry", PoetryRoutes.routes);

    return router;
  }
}
