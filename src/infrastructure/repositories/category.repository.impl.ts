import { CategoryDTO } from "../../domain/dtos/category/category.dto";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CategoryRepository } from "../../domain/repositories/category.repository";
import { CategoryDatasourceImpl } from "../datasources/category.datasource.impl";

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(private readonly datasource: CategoryDatasourceImpl) {}

  create(categoryDto: CategoryDTO): Promise<CategoryEntity> {
    return this.datasource.create(categoryDto);
  }
}
