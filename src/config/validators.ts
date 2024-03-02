export class Validators {
  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }

  static isValueInEnum<T extends Record<string, string | number>>(
    value: string,
    enumeration: T
  ): boolean {
    return Object.values(enumeration).includes(value as T[keyof T]);
  }
}
