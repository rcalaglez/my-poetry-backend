import { PoetryEntity } from "../../domain/entities/poetry.entity";
import { CustomError } from "../../domain/errors/custom.error";

export class PoetryMapper {
  static entityFromObject(object: { [key: string]: any }) {
    const { id, _id, title, content, category, img } = object;

    if (!_id && !id) {
      throw CustomError.badRequest("Missing id");
    }

    if (!title) throw CustomError.badRequest("Missing title");
    if (!content) throw CustomError.badRequest("Missing content");
    if (!category) throw CustomError.badRequest("Missing category");

    return new PoetryEntity(_id || id, title, content, category.name, img);
  }
}
