import { Validators } from "../../config";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CategoryType } from "../../domain/enums/category-type.enum";
import { CustomError } from "../../domain/errors/custom.error";

export class CategoryMapper {
  static entityFromObject(object: { [key: string]: any }) {
    const { id, _id, name, type } = object;

    if (!_id || !id) {
      throw CustomError.badRequest("Missing id");
    }

    if (!name) throw CustomError.badRequest("Missing name");
    if (type && !Validators.isValueInEnum(type, CategoryType))
      throw CustomError.badRequest("Type not valid");

    return new CategoryEntity(_id || id, name, type);
  }
}
