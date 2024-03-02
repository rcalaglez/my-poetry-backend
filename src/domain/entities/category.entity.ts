import { CategoryType } from "../enums/category-type.enum";
export class CategoryEntity {
  constructor(
    public id: string,
    public name: string,
    public type: CategoryType
  ) {}
}
