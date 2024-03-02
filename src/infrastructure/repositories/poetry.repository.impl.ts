import { PoetryDTO } from "../../domain/dtos/poetry/poetry.dto";
import { PoetryEntity } from "../../domain/entities/poetry.entity";
import { PoetryRepository } from "../../domain/repositories/poetry.repository";
import { PoetryDataSourceImpl } from "../datasources/poetry.datasource.impl";

export class PoetryRepositoryImpl implements PoetryRepository {
  constructor(private readonly datasource: PoetryDataSourceImpl) {}
  getAll(): Promise<PoetryEntity[]> {
    return this.datasource.getAll();
  }
  modify(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    throw new Error("Method not implemented.");
  }
  like(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    return this.datasource.like(poetryDto);
  }
  unlike(poetryDto: PoetryDTO): Promise<PoetryEntity | string> {
    return this.datasource.unlike(poetryDto);
  }

  create(poetryDto: PoetryDTO): Promise<PoetryEntity> {
    return this.datasource.create(poetryDto);
  }
}
