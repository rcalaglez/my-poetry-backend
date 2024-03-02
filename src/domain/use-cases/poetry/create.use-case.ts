import { PoetryDTO } from "../../dtos/poetry/poetry.dto";
import { PoetryRepository } from "../../repositories/poetry.repository";

interface CreatePoetryUseCase {
  execute(poetryDto: PoetryDTO): Promise<any>;
}

export class CreatePoetry implements CreatePoetryUseCase {
  constructor(private readonly poetryRepository: PoetryRepository) {}

  async execute(poetryDto: PoetryDTO): Promise<any> {
    return await this.poetryRepository.create(poetryDto);
  }
}
