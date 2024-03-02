import { Validators } from "../../../config";

export class PoetryDTO {
  private constructor(
    public title: string,
    public content: string,
    public categoryName: string,
    public img?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, PoetryDTO?] {
    const { title, content, categoryName, img } = object;

    if (!title) return ["Missing title", undefined];
    if (!content) return ["Missing content", undefined];
    if (!categoryName) return ["Missing category", undefined];

    return [undefined, new PoetryDTO(title, content, categoryName, img)];
  }
}
