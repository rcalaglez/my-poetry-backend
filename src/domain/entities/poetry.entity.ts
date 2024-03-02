import { CategoryEntity } from "./category.entity";

export class PoetryEntity {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public category: CategoryEntity,
    public likes: number,
    public img?: string
  ) {}
}
