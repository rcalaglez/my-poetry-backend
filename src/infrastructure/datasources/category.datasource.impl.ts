import { CategoryModel } from "../../data/mongodb";
import { CategoryDataSource } from "../../domain/datasources/category.datasource";
import { CategoryDTO } from "../../domain/dtos/category/category.dto";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { CategoryMapper } from "../mappers/category.mapper";

export class CategoryDatasourceImpl implements CategoryDataSource {
  constructor() {}

  async create(categoryDto: CategoryDTO): Promise<CategoryEntity> {
    const { name, type } = categoryDto;

    try {
      const categoryExists = await CategoryModel.findOne({ name });
      if (categoryExists)
        throw CustomError.badRequest("Category already exists");

      const category = await CategoryModel.create({
        name,
        type,
      });

      await category.save();

      console.log(category);

      return CategoryMapper.entityFromObject(category);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer();
    }
  }
}
