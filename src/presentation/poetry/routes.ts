import { Router } from "express";
import { PoetryController } from "./controller";
import { PoetryDataSourceImpl } from "../../infrastructure/datasources/poetry.datasource.impl";
import { PoetryRepositoryImpl } from "../../infrastructure/repositories/poetry.repository.impl";

export class PoetryRoutes {
  static get routes(): Router {
    const router = Router();

    const database = new PoetryDataSourceImpl();
    const repository = new PoetryRepositoryImpl(database);
    const controller = new PoetryController(repository);

    router.post("/", controller.createPoetry);
    router.get("/", controller.getAll);
    router.put("/like", controller.like);
    router.put("/unlike", controller.unlike);

    return router;
  }
}
