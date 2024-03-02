import { CategoryDTO } from "../dtos/category/category.dto";
import { CategoryEntity } from "../entities/category.entity";

export abstract class CategoryDataSource {
  abstract create(categoryDto: CategoryDTO): Promise<CategoryEntity>;
}
