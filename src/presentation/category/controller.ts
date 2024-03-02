import { Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { CategoryRepository } from "../../domain/repositories/category.repository";
import { CategoryDTO } from "../../domain/dtos/category/category.dto";
import { CreateCategory } from "../../domain/use-cases/category/create.use-case";

export class CategoryController {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.error(error);
    return res.status(500).json({ error: "Internal Server error" });
  };

  createCategory = async (req: Request, res: Response) => {
    const [error, categoryDto] = CategoryDTO.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateCategory(this.categoryRepository)
      .execute(categoryDto!)
      .then((data) => res.status(201).json(data))
      .catch((error) => this.handleError(error, res));
  };
}
