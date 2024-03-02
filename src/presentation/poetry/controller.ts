import { Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { PoetryRepository } from "../../domain/repositories/poetry.repository";
import { PoetryDTO } from "../../domain/dtos/poetry/poetry.dto";
import { CreatePoetry } from "../../domain/use-cases/poetry/create.use-case";

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

    console.log("controller", poetryDto);

    new CreatePoetry(this.poetryRepository)
      .execute(poetryDto!)
      .then((data) => res.status(201).json(data))
      .catch((error) => this.handleError(error, res));
  };
}
