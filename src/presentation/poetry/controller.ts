import { Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { PoetryRepository } from "../../domain/repositories/poetry.repository";
import { PoetryDTO } from "../../domain/dtos/poetry/poetry.dto";
import { CreatePoetry } from "../../domain/use-cases/poetry/create.use-case";
import { GetAllPoetry } from "../../domain/use-cases/poetry/get-all.use-case";
import { PostLikePoetry } from "../../domain/use-cases/poetry/like.use-case";
import { PostUnlikePoetry } from "../../domain/use-cases/poetry/unlike.use-case";

export class PoetryController {
  constructor(private readonly poetryRepository: PoetryRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.error(error);
    return res.status(500).json({ error: "Internal Server error" });
  };

  createPoetry = async (req: Request, res: Response) => {
    const [error, poetryDto] = PoetryDTO.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreatePoetry(this.poetryRepository)
      .execute(poetryDto!)
      .then((data) => res.status(201).json(data))
      .catch((error) => this.handleError(error, res));
  };

  getAll = async (req: Request, res: Response) => {
    new GetAllPoetry(this.poetryRepository)
      .execute()
      .then((data) => res.status(200).json(data))
      .catch((error) => this.handleError(error, res));
  };

  like = async (req: Request, res: Response) => {
    const [error, poetryDto] = PoetryDTO.create(req.body);
    if (error) return res.status(400).json({ error });

    new PostLikePoetry(this.poetryRepository)
      .execute(poetryDto!)
      .then((data) => res.status(200).json(data))
      .catch((error) => this.handleError(error, res));
  };

  unlike = async (req: Request, res: Response) => {
    const [error, poetryDto] = PoetryDTO.create(req.body);
    if (error) return res.status(400).json({ error });

    new PostUnlikePoetry(this.poetryRepository)
      .execute(poetryDto!)
      .then((data) => res.status(200).json(data))
      .catch((error) => this.handleError(error, res));
  };
}
