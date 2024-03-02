import { CategoryType } from "../enums/categoryType.enum";
export class CategoryEntity {
  constructor(
    public id: string,
    public name: string,
    public type: CategoryType
  ) {}
}
