import { PoetryDTO } from "../dtos/poetry/poetry.dto";
import { PoetryEntity } from "../entities/poetry.entity";

export abstract class PoetryRepository {
  abstract create(poetryDto: PoetryDTO): Promise<PoetryEntity>;
  abstract modify(poetryDto: PoetryDTO): Promise<PoetryEntity>;

  abstract like(poetryDto: PoetryDTO): Promise<PoetryEntity>;
  abstract unlike(poetryDto: PoetryDTO): Promise<PoetryEntity>;
}
