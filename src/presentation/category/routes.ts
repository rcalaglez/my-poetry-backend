import { Router } from "express";
import { CategoryController } from "./controller";
import { CategoryDatasourceImpl } from "../../infrastructure/datasources/category.datasource.impl";
import { CategoryRepositoryImpl } from "../../infrastructure/repositories/category.repository.impl";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();

    const database = new CategoryDatasourceImpl();
    const repository = new CategoryRepositoryImpl(database);
    const controller = new CategoryController(repository);

    router.post("/", controller.createCategory);

    return router;
  }
}
