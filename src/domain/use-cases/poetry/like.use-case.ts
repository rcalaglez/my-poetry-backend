import { PoetryDTO } from "../../dtos/poetry/poetry.dto";
import { PoetryRepository } from "../../repositories/poetry.repository";

interface PostLikePoetryUseCase {
  execute(poetryDto: PoetryDTO): Promise<any>;
}

export class PostLikePoetry implements PostLikePoetryUseCase {
  constructor(private readonly poetryRepository: PoetryRepository) {}

  async execute(poetryDto: PoetryDTO): Promise<any> {
    return await this.poetryRepository.like(poetryDto);
  }
}
