import { CategoryDTO } from "../../dtos/category/category.dto";
import { CategoryRepository } from "../../repositories/category.repository";

interface CreateCategoryUseCase {
  execute(categoryDto: CategoryDTO): Promise<any>;
}

export class CreateCategory implements CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(categoryDto: CategoryDTO): Promise<any> {
    return await this.categoryRepository.create(categoryDto);
  }
}
