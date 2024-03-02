import { PoetryDTO } from "../../domain/dtos/poetry/poetry.dto";
import { PoetryEntity } from "../../domain/entities/poetry.entity";
import { PoetryRepository } from "../../domain/repositories/poetry.repository";
import { PoetryDataSourceImpl } from "../datasources/poetry.datasource.impl";

export class PoetryRepositoryImpl implements PoetryRepository {
  constructor(private readonly datasource: PoetryDataSourceImpl) {}
  modify(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    throw new Error("Method not implemented.");
  }
  like(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    throw new Error("Method not implemented.");
  }
  unlike(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    throw new Error("Method not implemented.");
  }

  create(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    return this.datasource.create(poetryDto);
  }
}
