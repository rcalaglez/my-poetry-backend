import { Validators } from "../../../config";
import { CategoryType } from "../../enums/category-type.enum";

export class CategoryDTO {
  private constructor(public name: string, public type?: CategoryType) {}

  static create(object: { [key: string]: any }): [string?, CategoryDTO?] {
    const { name, type } = object;

    if (!name) return ["Missing name", undefined];
    if (type && !Validators.isValueInEnum(type, CategoryType))
      return ["Type not valid", undefined];

    return type
      ? [undefined, new CategoryDTO(name, type as CategoryType)]
      : [undefined, new CategoryDTO(name)];
  }
}
