import { Router } from "express";
import { CategoryRoutes } from "./category/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/category", CategoryRoutes.routes);

    return router;
  }
}
