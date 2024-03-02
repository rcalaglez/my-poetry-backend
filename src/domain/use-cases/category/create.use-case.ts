import { CategoryDTO } from "../../dtos/category/category.dto";
import { CategoryRepository } from "../../repositories/category.repository";

interface CreateCategoryUseCase {
  execute(categoryDto: CategoryDTO): Promise<any>;
}

export class CreateCategory implements CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  execute(categoryDto: CategoryDTO): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
