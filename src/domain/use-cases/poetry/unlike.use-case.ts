import { PoetryDTO } from "../../dtos/poetry/poetry.dto";
import { PoetryRepository } from "../../repositories/poetry.repository";

interface PostUnlikePoetryUseCase {
  execute(poetryDto: PoetryDTO): Promise<any>;
}

export class PostUnlikePoetry implements PostUnlikePoetryUseCase {
  constructor(private readonly poetryRepository: PoetryRepository) {}

  async execute(poetryDto: PoetryDTO): Promise<any> {
    return await this.poetryRepository.unlike(poetryDto);
  }
}
