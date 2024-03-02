import { PoetryRepository } from "../../repositories/poetry.repository";

interface GetAllPoetryUseCase {
  execute(): Promise<any>;
}

export class GetAllPoetry implements GetAllPoetryUseCase {
  constructor(private readonly poetryRepository: PoetryRepository) {}

  async execute(): Promise<any> {
    return await this.poetryRepository.getAll();
  }
}
