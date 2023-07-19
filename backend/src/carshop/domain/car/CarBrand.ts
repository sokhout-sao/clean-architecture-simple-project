export default class CarBrand {
  private value!: string;

  private constructor(value: string) {
    if (value.trim() === '')
      throw new Error('CarBrand value should not be empty');

    this.value = value;
  }

  static of(value: string): CarBrand {
    return new CarBrand(value);
  }

  toJSON(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  valueOf(): string {
    return this.value;
  }
}
