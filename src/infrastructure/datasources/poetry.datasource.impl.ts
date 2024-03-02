import { CategoryModel, PoetryModel } from "../../data/mongodb";
import { PoetryDataSource } from "../../domain/datasources/poetry.datasource";
import { PoetryDTO } from "../../domain/dtos/poetry/poetry.dto";
import { PoetryEntity } from "../../domain/entities/poetry.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { PoetryMapper } from "../mappers/poetry.mapper";

export class PoetryDataSourceImpl implements PoetryDataSource {
  constructor() {}
  modify(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    throw new Error("Method not implemented.");
  }
  like(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    throw new Error("Method not implemented.");
  }
  unlike(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    throw new Error("Method not implemented.");
  }

  async create(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    const { title, content, categoryName, img } = poetryDto;

    try {
      let category = await CategoryModel.findOne({
        name: categoryName,
      });

      if (!category) {
        category = await CategoryModel.create({
          name: categoryName,
        });
      }

      const poetryExists = await PoetryModel.findOne({ title, category });
      if (poetryExists) throw CustomError.badRequest("Poetry already exists");

      const poetry = await PoetryModel.create({
        title,
        content,
        category,
        img,
      });

      await poetry.save();

      return PoetryMapper.entityFromObject(poetry);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer();
    }
  }
}
