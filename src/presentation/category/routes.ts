import { Router } from "express";
import { CategoryController } from "./controller";
import { CreateCategory } from "../../domain/use-cases/category/create.use-case";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();

    /*     const database;
    const repository;
    const controller = new CategoryController()

    router.post("/", controller.createCategory) */

    return router;
  }
}
