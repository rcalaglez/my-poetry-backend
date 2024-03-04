import { CategoryModel, PoetryModel } from "../../data/mongodb";
import { PoetryDataSource } from "../../domain/datasources/poetry.datasource";
import { PoetryDTO } from "../../domain/dtos/poetry/poetry.dto";
import { PoetryEntity } from "../../domain/entities/poetry.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { PoetryMapper } from "../mappers/poetry.mapper";

export class PoetryDataSourceImpl implements PoetryDataSource {
  constructor() {}
  async getAll(): Promise<PoetryEntity[]> {
    try {
      return (await PoetryModel.find().populate('category')).map((poetry) =>
        PoetryMapper.entityFromObject(poetry)
      );
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer();
    }
  }
  modify(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    throw new Error("Method not implemented.");
  }

  async like(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    const { title, categoryName } = poetryDto;

    try {
      let category = await CategoryModel.findOne({
        name: categoryName,
      });

      if (!category) {
        throw CustomError.internalServer();
      }

      const poetry = await PoetryModel.findOne({ title, category });
      if (!poetry) throw CustomError.internalServer();

      poetry.likes++;

      await poetry.save();

      return PoetryMapper.entityFromObject(poetry);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer();
    }
  }

  async unlike(poetryDto: PoetryDTO): Promise<PoetryEntity | string> {
    const { title, categoryName } = poetryDto;

    try {
      let category = await CategoryModel.findOne({
        name: categoryName,
      });

      if (!category) {
        throw CustomError.internalServer();
      }

      const poetry = await PoetryModel.findOne({ title, category });
      if (!poetry) throw CustomError.internalServer();

      if (poetry.likes === 0) {
        return "No pueden haber menos de 0 likes";
      }

      poetry.likes--;

      await poetry.save();

      return PoetryMapper.entityFromObject(poetry);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer();
    }
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
