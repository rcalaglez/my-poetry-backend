import { CategoryType } from "../enums/categoryType.enum";
export class CategoryEntity {
  constructor(
    public id: string,
    public nane: string,
    public type: CategoryType
  ) {}
}
